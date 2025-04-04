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
    "5QZT1KJkBYMv1MxhBv8bQouRq4NFzNjTEqTbFwjRW8VfBL6zMhThckrmECz47Azx2pQ6qNyhxKFjw246w9XJyRcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4on5SZCZcaNZSdTKu7BRtfX7VpPsQpBer3RSY9Av7P3UhmZAuYXxcTpEcSeuCnmpSkzi5nbYCWkJxvALgeqDGMS5",
  "key1": "3XL2abLEh9ScdRAQ6aP4HpQtHyKnr6CPpCF3neTU2EF6BSQ8bgWFvjgohSJnUhnZc1UBtRGyggRkMoampHY3QUZn",
  "key2": "3r7D1wcLkZSuANT1S3vy2tMSKdkpuqbKn4HzCWKXM9kmrMVKT5nyxvHd2Nf4pnDE41JSDv2QXYb39dTD45tLgzMU",
  "key3": "5HfEEXUgqDLpZWxbahRXD9aMUjNwefqzHjSVt5NiKkyVvwtKbaHV2e19sWwtxbSU14m1q7RBW3372ruG5vEkJ6jz",
  "key4": "3zwVVauCPovoimWHJt71PzhVYhSZDpRA5ucAPFJp7rJgLFnDU8qU2zuAyLkE7ARgZ4DYy2XXKcMkGN8dtp8APs8Q",
  "key5": "5ncEA2ksi8nUDkimWyS1HCVTcVo31J9XzUFGhE8YcydmMhVs2E6nZfViuUrMPE6xowevqUAVPVXs1mG9RKbg7974",
  "key6": "52hPxwKnsJzdfSBLJxFzdm55XCyzKTn82g8ZBPty8Zrt54rLpshJwgCxcLsXwrnkteDa1QzTENVqpa1AHS2Ey2pQ",
  "key7": "4psQ5U6wppoa29FroV2X6i1Pu8HUR7acxsQU5bwfP2AQfF6N7kg9nuyKRq2iBWXVgkH54cTu1h6ABqndGQz5EzdF",
  "key8": "2hBJmb57dvXRybh7ZFw3YLpNQ6DFpKBp1gjUzpF5dFrcs4LS11pFLPpdhVrDToCyvwjpBru74VmarRckAYuuUPwy",
  "key9": "4DKNYWy1mEPxXz7w6uLTdx9Roxp6fP3MgwzmZdMcv55samTL4rs6r9KS9JBqHMFSdT6KBdpDvTnZW9q9rKRjMwXi",
  "key10": "45ff7qVSiGUUD96DmVMrjc8MhM23ySV5wScgDh8ybRRHYUuFKbiuGJRm1PeBvHy29rv2YHeMmsdsukxXpwp4iD2a",
  "key11": "2du9cqu4VcVkE31RWAPFRbS43DAqyQNoLZYs3Xah1eSCh6NgPMpdNvLu3unVNybsNycgtzoosEUvvX84e7Edvrpw",
  "key12": "2h9PpwVw9Z9NJBEotPk3x2f496Tqk2CFZBJxF4YJ3cnSoVXpQo2B9aec1ptMPWCyzWqgCUJB1Hpq8wPT6gN8gDFi",
  "key13": "5TFJS9KttpcLtAVSZHzhssPBc2qG23zJ4WXranLPpz1n3hhkkV2qKwrEVp4CpqZ7SMyTqUKatnFptmDRM1fzivhw",
  "key14": "d895CnfF26dUMN27JVYJkFSbG1wA3XpCCnerYXaw1PnvPZQ5xeQoKVwJZc2qmhjMuFQ1rCiMYBq36Ui2rk7eKR1",
  "key15": "3Pk5k5C7riManKeVfz5EuWfpvQYc3HRpk2wmjzGgogdmRcfV3ZBhyDUAccwyyFN1tXyuWHDrQ4aWtywfFSrA5sk7",
  "key16": "4KrMs7WTq9Lmr1vbbJ2e4kEMx97WoqvTZneX9bTKBDLBmMbmY7FGhgBP5sbAhm4WNV4dLk5Vp47P4qEjQA68ksD4",
  "key17": "4dgaig7FPwn2bFRUn4RsXfVNrJfB89fu2i4yNsr7gYB3nSJaxqG26qEVoMUk5AKZ2vXToniLUWGgzp39nf5VWT4q",
  "key18": "5NheMdHzioTzg3zWkrQzD76vZYLnmnXzmccsmi1fGFaK2aocBizvpTRAAUvCzKxv17AaL5pZTo97irBypm6894wD",
  "key19": "22WGNDbMF9gU8wS4qq2vK46C4F1mjDs7sSCqT7TxqB2bU6kekDa548boq81J8JsL3m7vXt85ac4NgL5gyM8wRyvn",
  "key20": "4PDeeQnLkv634EZLigXzEyPaQX7nZda5sEEEksTdyHYdL5JdU33KR4apHw2DCCcC8pAbrGNftghJpP6SxZHHLrgu",
  "key21": "481YynYpHhWBXsHqYZqSKELAwB2X23wPAU5WX9AVVEfCC4VynKKtdRqQ8kf6GGZr8H4TZQmweZoTaogdkCdMYtQu",
  "key22": "3sRKoBtmm1qzdVm2zW3wnepQSoGoyhGDCctHYGtkLZSqKxmyXyP8Zz7CBQZ9Hf8ZzgjuAMDW3saDc6opf2MASxDi",
  "key23": "3vPDkunUitMWHwkRQx5UCoEVQQqPmrKRAG2tNkmeV5VjqRPdXmLsuH9MLSXnHXZjvVQujbWaE3Zm4Fc14sDJBdk5",
  "key24": "WW1k3oayeEy9rX5DR7td6C38XuthaHEJTLmdZTFtMASDqWkccfGZmpQ69PDLuHxxaDTeUyGcVqn3xozSYaA48dx",
  "key25": "2s1qu4pzmTCoSaRC7CXKjTjHGZN3G3YDh2wgCAPvkUQfd4ZEyHCxqPMv9jpJ1hpb2zMYa5r6FVjng3frauMfL7g9",
  "key26": "MkkEv5JPGqr3hy7bwXt4x8HTtMc6RFRDcQH1ZrdStnyU2txnsw16omXN7r3k9dLSQCPhymRrMEHkP7iJ8Fxk6Sj",
  "key27": "5sXYKXepUJt51kDDag536trMrrAda7oC2WeZStUFsPStuYjg6nvrVQMWwGNSEMn4rqFFiCz3VcLRaZwRHCTDcdhB",
  "key28": "5KyoW7ioStkjMkDWJf48J5tKf6jCKSKzbUTD4uFYC2PfEHeH8jA4F2DfiHEdH2Q9BCxRVNA61EtonkdoQcBF8QKr"
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
