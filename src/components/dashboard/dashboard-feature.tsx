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
    "2BmVufH1WhuHy5vj1gJqFBky8wxCGw5bL8c4kS2xPVHv6srSVNwKzZqgxC4ju2HDbkGtsDHhfPwAS62yBDJkEHNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37LsLiW2aazyqQhz7DrqeYCm6XvERz74Nieh3WudP9UB9fFVBsNbAoDhURpspc2JXQZBanbAAcsoUksp9SLqpLnH",
  "key1": "2Vtbqrd7u6HKKQxJhxGqtQXeieDPP68ND21Dwgr1HmR81cGVXyxKRui9YEFm5bNveUQ6hEgb7JBmRjLek7igak4L",
  "key2": "4FmdXQsbcRr7RuSiQvVehRBm2xMx6dpsKnEDTnFQ2wfZrjaAeLMR3WpKycRVNjbLkzrNU3hmk2ckqT3udLepdu3X",
  "key3": "4Pvdd5ePMEXiFYjwEuMJggwW4zjkjVdu2ZPWVqtbmxfvnJHCipakCDVim6pw9gVXyuVr9D2vakSgn6Vj7sQur4P",
  "key4": "2wNb51YhfH3MmfE41syqvQHDD51wE39q1iu87wQsknH7jaRtMak8WKAWgnUHtF3htTDcS7qtH4594Y49mgURkvHt",
  "key5": "3V1D67hXn1dodX8DGpHr5tukLmbL6bpBwissojeuCrEFUxT9FyqdTe4KVKoQrWgnVcjFPGWv6ZnA5z1n4MqPzh8x",
  "key6": "ZXXH68Er7iigxeDEVpDX7ovkdxsqurqoKMwXZvd1nwo5SJ1qZT2TkinC2GRAqKBMK6ozeYfy2p8oMwn6GfSfXXk",
  "key7": "4dwZTp1kLW9cYbCxguPQnGNzK7Qu7DUujaSxSaLNrAfGscFq1pvfqdRnXhUHo4CjStM97TTuyAQoWYh9K7VGrHq6",
  "key8": "2yDYhw4JZrmmhPBx1bdWt6c8Gqfsttm6VVQaVUsNoNRy6DydT8KKKZ4DCpDArpR4EZo3Yk1bqfvhPEGdJDhWMR2S",
  "key9": "Q8yuGCaLnZ2BGZDqgghB1MESWyGMBJGvggf6M1Q8tsR8SUTbycyTbZgbu3V7pnApk9tELKBza7WDvZXPMNWn4Hi",
  "key10": "41ynyS2Grz8ScJbmxBdDzRy2ibtRpnxJ9aHYMoPRD8BuY9jZPz8aQkgE7hie6PERyTBWfstX45PkBZQqpKDPkxKT",
  "key11": "4rhQdzyKfFC2M5nrj6eZgUkJxCXeG5SiZ8h49b3gMPHnDbsXLHZA4VPt6wQiTYFtRpQf4iadaJtcw5qfPs5xDyWh",
  "key12": "CKmobV2kVuoDY97JKZoX2n1gtxbPpWQDh5j6vQaMToxnMjEsmyPf2RX64jMjtm6wejYLvF2yK3M6X5NzvSppJEk",
  "key13": "2LeaCVpH4joCtP5xmXEYN28mteKdtkJAApxCKV37kusEKSwkSUM9MmBKpBUmNUmGj5JMmZZ8h6uoxLeZJiCuwJad",
  "key14": "dUKEXYm1yZUcNbsNfzNNymo6it8Z9oHLEZz9QDT9bmGaEquWZwE99HiY6BQbhrNmcP6ZehD81r3kpfqFHWUtnoZ",
  "key15": "37X1KkWVkftSA15EQWFSLr42sxk4vfEdwekSDkY4LGuXzZsi2UhrGwyityhpRjutwuM6iPXFyZTYgxFYPtuymaCq",
  "key16": "ZPvp4296nDUWMyniurM4unexsCDe5wbTu7dSvGCoye9V2PzGu9XJcczXmrjWRJbXjdW6XrU9R71xmRQbxsqCMda",
  "key17": "H3W5mCsi6VKTSEjyynUiKDXh5VnuVG4x9cHCt4VzHFV9WRd3zvdA6jsZvDjDPksgMbmngifMgTB3cBr68yUsEmM",
  "key18": "4GhRoVDiXkWNzkDsHZ32UxkRA7oERgVxvBwMkCGM4VibQQ8fnLfFnBeqkWNJ2fkaVFbcBHYEcCbaGG1CQvDShZqe",
  "key19": "5yBSmx8WR5vKsTCVRWSrcYCsexNpMi8D87yucXJp7uVkA5b2J8k2bvo3X2RUFTgAL789iykD2cnFNYjqQ51w3LBs",
  "key20": "3K9jHKYLwAKaxEKuxksiTa4v1eYoiCHi4ytwiGXagm1kuBBsuQhx1fihF1RdJACB5iCxMhFZFxwXTKrgeMg7suBg",
  "key21": "3v6KsQJYJh41MMomiPki2APawGypSoRRLizGPoekYW79b1Gwz5oyUYFngME5VaSmUn3ZAw8ZtYQEXAvMma388jvg",
  "key22": "fW92wPX1xGmLy48jaUNqA3mnBe78jJEYXGPnkz5T5cDTAuMX7Wyic6FCjT2CyLHUsAdeFeTuUSih8J4TCGFT2mN",
  "key23": "MK3LM87Nh8oFSXWxQ8UMjT14vNA881sxVpsh2rHJkMpsFMXoWaTPHHLMu38qn97ueagpmYqrXcoDqFhnemgBFhL",
  "key24": "4FdKez4sWjRxVRfB1PucMK3S4wx5umvaNE1Who8ntQpbooSbzZRDWDEcJ4hW5PKFTULkiEbxsecd52H1T8urNbrf",
  "key25": "426tMMyHWrC1aDAQa5tQpVUPay3m6KvapXpjnAFfnoLmaDFwvgKacJjKdJShZkhDfVv2SXo3rxb4kibV2ZnqiTMb",
  "key26": "2KAhACqok31m1tqnMkLcrznpgLtBLhkp4oVyTNJxd9byY3BLsDjU9tHUwJPH3AEZYixx7zRSMrns26EjcpVyoPX4",
  "key27": "3xB2of4Sh6uRhn7F2C6poiYvxMt16B6YL4j1aXJz1kZ8XMDUUjKUMW1gtceSXXvw5z3XckEcsnh4kyboV4RqrfTw",
  "key28": "X1mAVt6Bq3Z2HBK8jfvUBxH69PchKWbXoiJnaxMeht8pkyQSiqFSgt4h6jnDqAQqZQjMyLMQMPaEMjrfbbjCL2W",
  "key29": "SbsV5hnP1Z5v5JMVbdQeG1EawAGcymcivJXYuzEjQHFzX7AdySpkFbEYGUMffXijJmK74LU6UGYZsqvuEb4M5Yk",
  "key30": "pmeyegAK2yiC62G9eBfZvpjAP4yBPuJ31JhhbBZN61TVMQ4qSbdR7yVy5c3w43KuhuNHTdUwbHkC99WovGgp4Mo",
  "key31": "5cPfhcqbpCSYWgFEoFihLyK8UtWWcd2UR9BhtzTSpjRX8pEBVhjXPCBRrW8vPhEBxDTuQ4jnhbNFeWhR6ME4qVSP",
  "key32": "4TzRqCUX9UtpbBwNRJvJgLTUCu9D2eET78KCsuxFJudiDqLknUg9FAjQEwYANgaReiWELkxjAdm7cWPGpwXC3Zv9",
  "key33": "2VdykgJEtaU1cpB22ZNyVYi7BhLe2wwvkoY66fL1nJojFXxx6Ecuda91FXzbsHhxB7xqHKkBNbiQUzEt6y1yHnHa",
  "key34": "5w294A2aH8VRPwVLRd1uNVSFQuZRTMKsHcWW7Jz9z9QejRpZJUAGgNdcX1GVLfc4e1VCN4YE6cqBV1Z2RKnX3sUr",
  "key35": "5LBi16pfzMmTiHSBygVRcqrxA4Zep1HsEyJt1C9BN4srDXEz3v11zTggqQXUgo6S9woQyTfnTMNJa9AyRssdqDAe",
  "key36": "5rE8nUoxrm2cHrmGZkVnUYSwqKXsefS5PvGMGiJzgtXQ9cRc4tA5BDD6tXQKU4jX8PayqitTYVXK95564bJpANXa"
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
