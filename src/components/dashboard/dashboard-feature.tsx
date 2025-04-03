/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2THXRJG2QEJNEoqK9BEnP85gV3Rt944PTeUrwHkLUNZU9LHcUCdkhv1M2WQBU1McJkgZZtKYzMQYsRaHiD3FxmT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b1GZ4kDYVw2hrC7VXNF8PfKr1qiFHgpvPH93Dmpe8sNS5GQYiPV9NMh1GicNpMa6ZEbTn7Xp2YSszP8h7UEm9Bo",
  "key1": "5ouK9yiKMUcCJhcWSpsUxUuK1GPQUqx5HtefCReiCKyRvHsSXez3xMRd958f53Lk1ezMU4tHfLv2shWSpiryo35P",
  "key2": "3uueuPss4mfEf9sY2Fwc2sNWktmPN4EF97BcYUxa3Tv2f2qXbr54wBNJdq9uvAiHJsoGEGypDL8jp81Zcm3foyLc",
  "key3": "4bwumq54Bn92HFvv8ibgVLx84jU6xMDvhxuLcwMhysEjezpibDYiDgxRj949PfCYqRgUiugEbb6W2uLxuhgYSEC1",
  "key4": "29SMRDfBpts4N4QCRJcamquuVcdmWrZnDt83r62s86vsxmHsDko4kXUvd8GvCPT3ByqiiAbdwBTLN83rS79cCtq5",
  "key5": "2734LETv6riGQerBP5sjSA6aMBG1gHBp1HKSWNRpcMp6QuVVPDR9u7fYk387xgWpPG23mtbVxDfxh8eK5HUgCoDq",
  "key6": "53xK4UGpTanneyaveSCWMA21AN7iXrN3gwmzSdzQ4rZsPnWgBPW8gV4qUFgn14nZpBNzXFdAh2KAssnUfjxjC71J",
  "key7": "Ufr9ZdDTsbPdwzXZH9vXW8YYW41HdqmccxxijjQjUSBLjntnCRkdjmFkjYgepnaLLmAxQDsxQ71LTnURAMgL1Dy",
  "key8": "5tzxN8DnjKj7rpQDKvSuJd2B3wybQoMZ2coLUKrEnSz8f5Z5YeTCPFMpYpJaEzj39sF3C3zW4Mbdvo78TiLWxQzj",
  "key9": "2u6R35gG8hRFfGAPLH5z54cZrFcxTqG9RWkRsUGMZDnAyGZ56DjfETnDzp8Tiiumi6Vw1E3dMaeTEUmzrbnoKXcj",
  "key10": "4BZcHNN3NQ6ZTx6H9HNQNiRsCvaw5tpMS2RQMjTPoa6XSVfg18VGAXped4HLDfAdFdmrXqPCGurGD2uYbD5pu8NF",
  "key11": "3fSNZjnW2CLr1S4K51bT95eKUTefXEAdyEy9vXWg3VckCaTeuyurEK34budsotUB8GzNcjtNCq1N3ByRbuGPhnUQ",
  "key12": "3yPYukxmJHqXbzP7wV4MY6gR8PiHdLk5nrojjUy1o2zREGjqjR9L5yNr3AQZhurvCwFzBF1R8ePxZfxzhTiHgf9m",
  "key13": "43edmtguaVNtcGJkKnVvkK9sFsDXYb9Y4bfEjvr6dVmgbAYNWE8X1UC62jHdPNyKvNtKB4ZvV89SiKMF9No8uEa3",
  "key14": "5RMth5mVqHQjNJRbwbufU2tp61v8gqbHctEKNQ4bgR6HEzMRXEHWj4jFFPuAPzKRQgjWhKQqoFMyzeRNjQao7Cvz",
  "key15": "2mQbN1w21VinJ1i7kPf8JnC8Bigqza9KaGKKCNWnPB1haqMsxSeCNAsNYmuFnvnFGYKZntRrTWCBsiFrY4Ehk1vy",
  "key16": "3wGtBuRvnaDBqXXdBo54rLGCkvwmHCHtSnmokuhRSCMrXaAvcm2dagZpRHAqw8yWjxF39eMcpeMUeh9v6vGTRcMW",
  "key17": "2H8PDPeG29zk3oz73JbFmsk49fuB4ZqSFJLzTvoQ4aWWWiKnBdHZ6FXvvbMFxweo7LRKGNTiTtCzr7JHRPE7Rkjx",
  "key18": "2KLznrziHBXxnj4TFDLs1gHe1w7AacTh3bPwys1LugqjVYkkwcARdZ82RNAX6Ea5AP3cjfXSUMf5SKRZwyiZb6g5",
  "key19": "4ZupukDSbF1WJMcfai6K59njPk7UBh3dWt8oMCLxjxYniA3iNfF2xBfT1MHxoEb9uo2fGcEn9YgWsJKyQnxkmugX",
  "key20": "2wrytsXJEP7ovWmXv2p9r2ya4xFcwJrrdEk46o8XXM2ff32pRF8P1wM6JsB1YPCwuJwf4hAXhCrhXEhzSnhANfSP",
  "key21": "YXMWJR5t8cGQc8VFZ734x4Fuq2TNyH1ATFgJkH5zEMp3jEyXpe7ntCNFVMwkrA2oyoibXYtBPCAZvHZcS3bUKpn",
  "key22": "3ewHok1iUMch6FbaJAFgjbNyKMMjZprRF1WdbvMdxNStYAStWadunc4VJhVeAabJnqkx8i6FVXNkpj23YkYiCqiJ",
  "key23": "3d9xqLmpjQE4j2uNAdZvttjMVMHjukqPsUvFcB5MziyCZFt9rwSY43QFhMwcSLziHXy3Ghkq82EBkSWu5BhHgZrL",
  "key24": "2mu9WrbLV2ZqooJQxJzAZFsboHWhqNcBuT8eYmUPjLeWjXxE6PcbLYGSV1Gc3xGiykBPRnawYRvRmPqMmyBwKiRE",
  "key25": "2mjN9fQcBHNT3ghLrRoJeXKFpkdHxqQK2nZha28Myb31uNR1pkmFztDKN1MPbJuQjf6XmUnkTdBDLe22DLTQ7Pzi",
  "key26": "2RnF43XpWSD3Fo7hpsdjVCaHybVrCMMeZ9DAjjK2CL6RUMLDeiVo6B9UzXHEvtvTGKAqw5EbUVwkWB1sK3qtUy9g",
  "key27": "2rnDSrGSSUVGofrbwMpYBGJk2iQevJbVCRhcbLHQEptHZpe51BShKqoZtWp3FEKC2NFSBprixFKmWNNTktJNGmwM",
  "key28": "4fDvsb8ECuZE1q9yEqn3YtrLHSwSWbu6syJhYBwicnd7mDwjqiACatDQNXsddv4aAqkFGhqdFDkDQEUUJSj8D3Be",
  "key29": "52HfrU1MyAVsDPALohTUGgT4jvqabffTJviVE6dVj7XidcLjpugdffSVhSBCtwUtbFpvz1iYot2jA4WPmFE2GWjC",
  "key30": "2U448XnFXiDYyCMhaQFyWcLUsNiJWCdGzT8P3tVYnJ48B47kv5AaxeRDgVmfbJpbCMtc1hHe2PiR9XbkEfq8H1KX",
  "key31": "3UkSVMZShVGuKM2ahxV51hU1ZaCsqMwMVVfKsmkY43Se7fMRS4KQjtA5ymjeCu8DZ2jYsqcPPPKhK1UkmRS2vsE3",
  "key32": "2cn5VHtDJbtzhgchTSvUj2n3qg5xoUva5z1YSpNgkFmEbDMV67Pj86hfRtPFho969atRQfMKFFn32N936VA2TYm2",
  "key33": "4qRHPxpBp9rRkwvZg6bDNaVmYxJXB8ZLAhJqFCeNkyKVH67PhKZwdDqENpNFEQFECe7YzNF6TNCr2BNUJk6RBqwm",
  "key34": "4n6Ad3pB4VUUgNco39t46ZKgiHwyL195otyDGcXHUG7Pfd582eCYmvgZDqSkMSgVR76519mmtadxPZhvf3MeHzp8",
  "key35": "3GNAUG1r4w1dNGs4TwYGAB6LWbWPKbJLwsyEyPbgzJY27r377UwE9SrjhuvoC5opQjt7NC4UzPw4P7xGNKBHqibm",
  "key36": "eh51Y3N6vcZvmLhxamPr5HdbAbGR5aqF9gjnVroLW4uF6wynJ4xMxyYtacL8j7bGWNoo9QXksishunKxAwuc28W"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
