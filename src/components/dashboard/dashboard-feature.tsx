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
    "5kwKQ8izTtbA3XsCrhdWCE4mPLwj2HHRJ2m2FTDabaNic1448LYMQfh5axANwviQVpRF4QN92FYuPFRTRv58L45P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vb4jjkBqzMDDbYZXe54G4hxoR6CuXq4cp4q6kKEg71iaL4xeXoorabMCJeLobBrxKEzpANCKfWq61k65E7gmfB6",
  "key1": "2FnrLwYq46hpN2eNWg48wmWHWL2zpTACN1u7RWCyDyeeBCJ6KhN25TpTGWL8mi98cnTwsYpVo2tsDXiKPA1251Uh",
  "key2": "5VbBDmzw1j6bag3gc1JxsERWENh966pNWax3VrB9P3QH9TE1WA7aK8rhRbBmRXESzHXex5rGhmNfqPCNBf8ztD46",
  "key3": "24JrYXmqPmhx3oUnUXRRpsiwKzLJpaaD6uyxDmQoJGJKVRPXKfxSTQcR3ECN2P27q6G3QhMcxoAnBhCH3U5TYVi9",
  "key4": "4fjk9NrAkCbukWAVhRRJzTmymuwp7wA8oud4s2P1aRz42N5iAJCmxBwJ3Ds7ejRbevKddRehkyHqe2Wbrns8MpRX",
  "key5": "4Soz9G7myUSyP52xozt154CrczM856DE5JkzhxYbgvmnWe5hJCc1dmCCXfMdAVCcKRekNV83kZuUgCwpTUeiyYg3",
  "key6": "5162Ds5nMXcaD4qDw2pkDh3YjKuXcPG6RE41WJLmoYqy1UY96LbgNwqT4UEfKuhRqXy8Mnc39sx2LMCYR3YQL1A8",
  "key7": "38A6MFGSZjhUMK4MZkSQAx5P5BiqJeragjGuJySjsd6Lvcig1R3vqRQf5XWMNyrU9WdAtgroQJAR4pBQpfvoPXGA",
  "key8": "MmocAJQhz8wQjF4DWkwez2iiXtC2NtpPNAKHA3L3ZFZ8RZmwjTySpCAnSH1Q9NAqodkzPa5zwycQWBr1Zb2YtuN",
  "key9": "5zgM7RFcVV6rhyc35jCiiqQJMzKMZQg3uVS4Mmoo93d4QHPMeG131qMfGecwqLLM18815utrEKe86pAojASV32xB",
  "key10": "3FKjmrA12mS8gZNK8uQkQuRonnC6xbSNSJZF2QQcmLHv7s7bHvWTWVTr9Vy5Lebu7Sim22GxpFvBhX1yx8sQLCtE",
  "key11": "2b9pZPLp33NDoGyCPMwRcE3aPRVnsqwkZVgukBg52KdETzPnvzY4YAYa3PJJuqL4L1ht5b42WKDbHAr4YAk2mBWW",
  "key12": "3BAWFAL2wMKnp4niuLzi96um3fjwC6Q99BTH8CpYWogsT2jmLAp7FrkngPYdsHactzx1sShjdzt6nwVVVAUL9bSR",
  "key13": "2q9QnotyMED5GTzq2Ss7DtNwhemHxyGL1W2CsaTQ2nViZco3qHLKjzbJx4thUeUFsAu5D6oPZArx5uXzYK82R8QP",
  "key14": "4MMr6TTJktPn73pRReFewyM3Sy9CQCAH1AyndkFcADM13Z11Z1VRfZMJtaVJw3wfXxVyLzEM7xj2QjMQXNVroxJv",
  "key15": "2tmYPo37g96poqJGgCLD7ZZi8sR2A6AW9x3fXxD5CVm4EqL8MvXfFk1XaZSNQ7QqRWTisTEoGxT93Een3pVCjt8L",
  "key16": "4s4hA21yPRy3gtJKdxa3wcCWAqAvZ7k6bonDqvSgxDTBPySgMmmuGGdzFq6EBomTqAeK7csZiRNVVaMrztwdskAm",
  "key17": "5DaGzqUvjeDaLY2Rc6kd9YnQx3ysVFagaizYtPLfi2T89AP2ZrkHGmRvpkZJVYP5UgKydZsrqttEHJDdED7t8frb",
  "key18": "3NnNecXQA2AiueELPkf5jWnSmNK8zdyTZaYkrkaPvnfH49miNH5qh7TKw5haUVGWiyadx9J7azt6rWVPKQEd7LBh",
  "key19": "3YPdidDFcXwXWceEDrjLBjVAhLiVTjMhEDh8QXf679hyoYovz5dx5Q5kNvFnNCLoitg5LcLLZaDu6PAmB6uUSYja",
  "key20": "2Ljy4bGa9SmCRFASGTjCj8fYj2ea8HktUSc8ARD2rxiHMxsL8AwE68eZoRE984dyv1xamucLpmrWuHmuJj81UoHg",
  "key21": "pxum65DqcH8ps1UniHxKhPCb9JdemHrXye1JZeH2RjAbVTqa1nuUZsL2WrinEKqgJNR2YcKdzbL1pppoWZaFjWB",
  "key22": "5KmRTWT4aYFpQYsGwiew3XrSNxvGMdNUm1t2FrpvFQeXpgWsE6zhoLJs8QUF1RhQujBLVwWEVE8CLb72RwKqtb3V",
  "key23": "2Z8qxwaM7XPuLMvUHkVQRLoFDwyRbZhzgubJxq152MvErWYYiGL6EtaH5ut2ezGifhAHXyHBdrV98QxmoPs5o5Nx",
  "key24": "5xegqSeSUKUhepiBMZUFG8ssFPHcLutL527jpBvUHEtLKvbQvL2zpgUSKtxwUrAK2kePft9CQwM1mjLg1rNZPzrZ",
  "key25": "3ekk1rPoxPYLY7EQp2WnEdoyDr1VidM5zg7o58m5AWhh5L53UVHgNxjU6Zt4C1Z1jUgYfbWHA44M6NTj3BbAhDPY"
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
