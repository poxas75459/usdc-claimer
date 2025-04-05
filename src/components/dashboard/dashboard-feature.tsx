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
    "3exwtHBsTi2fS7Bmu27PpYSpoaNvAXXm4NPpaB67zqsyBpvadJtaCr6YUNBLgj9gSFZbVohnQWbb3fGZCkRV8BUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PqVZLLjsyQzGT8re1rGipeP3rnSKv8mAgH1h4csRkcZdRMrUbyShBvxJjQJpUzUGMYWg5FPXLKUvgK5Tg84YpbZ",
  "key1": "2PnhPDZVd2MaNuF89At5qpx79NLBNieZeGA8nrpedof7ZcNYUvaM6oxSdgJkV8NHyn5trw2RmsAY3VqNNyMsRnin",
  "key2": "24pF2QQGo89iSdYzqAvrFoXgZKrWStHKiZxy4fUa6PpE3rZxa8H27R3bQuDXqNZjBPtGaeUA9KQsjCRs9H6KFj8J",
  "key3": "NqfMRkzDMAqDYGd6Ub4Wz5EL55YstvwimQ3FTxiYcGv7cr1t9TKYoUHtujdtkpCMWtLi5VEzBr3TS77SA8wU1GZ",
  "key4": "35hR1KJcWHCsdbkJfGiU6nabiyFizgpAqEnzsBqQpksLwZthWuRjCBVzQd9boAccEQedkB3V1B3VA3v7sEgN6bkk",
  "key5": "5M3KTez6jfhrk4Z8sSUXJJNh6fg8chdM2pVsm87q54yk79ey89USqpcsvfH8ihi6RqRbHpMiq1GKNuF3tPcPEiUC",
  "key6": "2oPfUFyjQvV6uB11PYeWN1EtjrmNeKANr1tFTww73sZ1shS7sTWZ1YAeMRMM2NntNEfEMheiFHgz9KcuPNf4ExWM",
  "key7": "5h2RXBEmHwtiCJna7jbeoHCC59g7PLqasuMibH9yf9EbuvSTJ72ZLYBUCQU3UUkUhmzLZzViBiYGEqmZ5xh9QMpP",
  "key8": "4v8yezrasA6Qg7R2LWsHW6Y3K5Qx8qjsJGzrWLmoDwsehAEFkYaXzxjzYsAguq1LoTP8NL1JJdHBYNWAgikve4tK",
  "key9": "25y4U5p8Pk7fu6wmSyW4JAMYeCQ2SZw9vewuztGWzjxDwsrF5WEQjL9RXpHLSZ1N9EEB27ieQ5owpegsM4TXJBxN",
  "key10": "37GZj9i1KGjpB97rA3y5pT29yJEErhCt6WGos1wnXyyNidmJR8nEnnAT3VZAnmuSWfK2g47w9noQMwH9VKpm52vT",
  "key11": "47WTXUCktqd6CrCXFAiT8NgZGLAJ91D1j1QJPT87E7G2cUhoy2DuehkyxFkNDcbWPAQhKMUQ2LpubyjjhEFGdpZX",
  "key12": "4QkJo4P1MNpz3FNkujZjZSYLkQ1LdJj1XhYB57xYjtJgAqDu9Bcq9vSEHDmtuHxvfcZ8RVdTsbUFyVFFvpUx5H2e",
  "key13": "545hsTX43LLNMkUSkJgmPyV26msfV6rq4WsqNBui2dEWGmeTw1u2CHC61ZA4LoRt9AU4qoh6pbPoijU6McATYygC",
  "key14": "4JBHbvTUNLWwnbmrEKfnYSDgnmS9MtbYCs3gp3K6McNGus9fxCJXi6nEtZhpZQDZ2XTR4JP4mcH9rHGdKhEwBns9",
  "key15": "3vJjwT9gMkRT4FQ3qcAzAMKnso6tcbFAsKCGdkPd7XkQgSXMYWCoud1m6mYTkDqnqw6XFJuXxbcBjYGzjLJcbfS",
  "key16": "4ijksTA9khhvkjebVsQrUThemtUJP4rNzbEaDxF3E123X4fYNPsBLs1dBiXgXEQWu8G3E1BKCsqxoCAzhtweCq5c",
  "key17": "5USMrAmEgPHBWGWLWv9AHQCCBjYq3GmXi1X1qdVsQJXKFoc3wXMN9tBXpQ6ZFBbe8tyMZYFkwaCS15UbTT3nVFVt",
  "key18": "2nQe7HRkpNKrEzZiZSsz3YAvUdokhdaaZsnfPCyVFYMnoBaAf5pkjydtGNm4n5Wwmn3mzfmgJUiPb4vZHL1W656o",
  "key19": "4bgikbnxBRr1G7Y4U9suEDvjTdZ8w99djRYjSneY8d7Yfxbf9BbQcTsyK2GWPP8JRTatUEpSYKM4a29u7Api44KK",
  "key20": "2BR15AWbstPdN7U9HXEX4CtrfWMyu2CyDWYUMoiK2Gc9HRR2raa2yxr1DsTFSahtBkEG3KTWFzZj84S6LU5urMtb",
  "key21": "3mbJakLXkbEws6LEJKa3AZiroAyMWUBmraCPsMFMYgU8FS9BXgtQVZkEqz69WAZEG15vLMu49VhxoA6RR1NtMHzZ",
  "key22": "3yhQLh6ntaoAVBQgTK3ffynHtaUkYYjJv8vttSGpLNChnL6CkiqQoMALftEP9DfjMe2r91gE9ZKzpFTiHzGDstPX",
  "key23": "38brQ9T2HHKbknTG3tJ383Gm4TcEKzv7ucKSfpxpFWaqytJLuMWmuWUWSD28hTzEkh9e2Dj5xcqrEBTXqeqZuMDu",
  "key24": "46J8gNTCfqhDSrNyQrTDbGRE21xDzRJCo7bndUQYv1AeTEqATj264PSYyPELWszy1Mri8LsgmuUXZ69ZLUkXH6mz",
  "key25": "3qRiXm5AUQVnhDcqgN9TKiiMgqvq5DffRoPZJgj5A1i4NpafF7NrYg6vhT2ohT848gv2kL8sxfU12X4yNFLLaCGu",
  "key26": "DZA1B96MmFF4efLdfJhE9SSc9gec9UJGHRdKHMQ8FSe7YjDYTGCDxPWve1fffjnChSNb28AY7dBHL3BsMWijK5Y",
  "key27": "3GPJft6tdJbbTSMEQn2BGEMH7uVMPyy2HoDduEgtYqn38Q2boNQFExnd4cmXFHV2jz4ZWng3s21Bdh7P5CFSdxu8",
  "key28": "398rb5Z7uSG28edPHEhv4DbiSvMqpQkCyMBCSh4iRxf8tjkboFgS9h5GmRDH3r6V6knHp66FjCm9JEzz4ob9X4Di",
  "key29": "5zBuDwxCiRYW4EWb5nqCyHaDGBPUXhLbLWEtWHpUMXyq9nncrTifoWsRkBnKsD2E6HECWNWJqZPHRQsrxFSbh1jk",
  "key30": "5Zti9FKD8AaCtRqvEQsdXR7BDawqMTfRZSzfcyNDpWWWB4Mvwc4MQ6DTgaDhTwCJ9RoJJxUFGPYmkYVAuZEuc5j5",
  "key31": "2uKMJtm5c33DHmAoWgQEFujYFS2sTT1uRZWejLNgW1PTZfuAcfxyy1dbnbPAmRjWbZTZ44WAnn99VuFBBk5Nf5Rb",
  "key32": "4Khw8h3Smj9G9iYQc8sEmspHGHnagDt4edNXR4X7aysaXSGut4HkavTUYJJJbrEij2t62H2qnVzAp6rKp4wVXLux",
  "key33": "2DueniUVXCWYwrxgz16qneHhmeK3sMsKxUqn7zG7xBymPn3nfuYvPGis16n8MNcWgQQLTuRDiSkrKYGMDhvT5ND6",
  "key34": "2KnLJDx52ZrRJVPcz9oaHemrPxyaYjrLukSRrZLFS9PvnZsM6HcpfXNeECTgrcQTSHii6YToFz5TfxFbwEQcLbWL",
  "key35": "5sQ768nBYjQhhLbqPbRwoPNmZCzH7SRcBXq9s9vRvTdGb2bcgWAzFbMBCWb2oDhxDM5e8nqt7QcAeVs7FWw9AJ6D",
  "key36": "4b1Kt2EtsXfCS5hbuwkpoR4UKA7nuvX56dRrvLzjJz5v1fGnDHbBBDHL55XhYseGzn5awwTmiAvBBRp2TQVbxjys"
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
