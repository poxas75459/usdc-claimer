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
    "45eT9b5K9HEmzNWd3sHzaketz14CgDjeCkv3CSBH5fYgm2qztcoo484w4E9LWfNiaVUFac7P2Kgq5xjWdFHpE4wp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VqdbWXedg6jw2HLegk7jJEgeatELzyNyyXwiNgpq719FUGYzsvJLN6cDn2w8wTvAiDYEsKAuMjYpZRvKUtVELJR",
  "key1": "bkTSYNEmu2wFDUzDgwjAqjsHtR5GbPBu1y1u5HdmZEob8rjRitvJiH4s8PmUFbd33YnR5BQfTr3tmAh2wAfGZvb",
  "key2": "35e9AZ6NwjvaP18kJ6JFUYDzw8yv3FYmB8jwo1LEQvosd1dskkWXx8Q9tey9JUfR3qnyF94AZedb9vRjwNqEwzRM",
  "key3": "tpeh7Um1BWXsqYBZaVCkMSgxX5SwL7oGgbWDz2PQnWVvMgczcuGB2Qx7kNwd8Foe9gYt7Es6io1JXdEfUp2xDEf",
  "key4": "4r2hpfqUbEseqzaqdrxYT4M3EMtc3ZYyAk4JPHKvmcpJ3UPjtQjkjMoz3btV5nfzf5Mfys143AKWHo2DEMktNkZq",
  "key5": "34Ywz31hET3hYAjVf1FaRAsquhEg829KBq3HaZZF7yJ9jq3zfgLKwyxyHRYHJzDUN2vf8GDoDYQPaJ8KzBZmJCHi",
  "key6": "4ZWEY4823pqh1iDkU79cNLm4qUPSNKifGw1PJFJQHukrm2eP42SyWrhDagRoe5muxtax2y4iXsXFK9d6iFAsMYx6",
  "key7": "2mBJjYohRYLDtNvfk7DMA9kYj2nrFFDzyqwu2kCtUkSoiEUGWxfGagn5umDBhAZFkUKH8Hkf16EQtN9Ln5syDVnN",
  "key8": "3qwCqcsLpqzt5JRckk8NKi1u4DFB77Mx1WnkMYk5eT12SCLWPL5DYpeVsTYUQNVLH7BRtJQiKH2ZgKeJQJTzUWfz",
  "key9": "4jFavUpkX7SHwB4Lcx3xXERzAqz1ypzfaFKedrGbRUTvunRZyRBxGVMQ9BPnYt3641waiWH82riXG9NH7vyqsSrp",
  "key10": "njbVSz6YLjCYE4UnReSbxAsGduYMh1j1eURwky2BHzxroFYDR38vRiR9guHtwPwBfVjccraLausnbZSpv4oJfqv",
  "key11": "5zeYvwZLHPDjuVjhg4EkC7tMKydW8Zfxe4dr3iJfP8S6dGprf98d4JqetV2UVTtWpugcpTbNGLE1CjX28JsJmH8r",
  "key12": "1atXR9SJCYFytFXRFMcVYr89RLwdPoJXhbpKnWa4ZLBJLG28eCdU4YoPUY5CQ35c77yvE9eKhZYGUnR6RXAkuau",
  "key13": "3Q1fcruDzY1F48UfTqExiBFDcwx4VFWLwasaoDF2sFq96MdqxSgAaRfCC7Nr17BexFTEVPVURn7NvuQhJ2wVXGYm",
  "key14": "419NZD3AXq7T1BPQTu7xgg49ED8oX5B7yKqHB9hVHSLBeHHQtRAnYQG3njf43MNEqbRkm4yLMNwyE326Xbu8Bnoo",
  "key15": "eoSCMSpf3eu7gj84hrpnh7UKWuSDReBu2KVARtMDuuxvFv9ENq2vWWcmuygg8zEbtumiasqoLhH4AJ9HnhcfmD5",
  "key16": "3Uqtwu5Agd8n51dNTpnGULX9ZvmLVBS7TcLUWwTUg3eHxvPpEBvzgLMpSHdfJwMKUs6CN5XujYUNYa6vTURPoFjT",
  "key17": "5xuaoQNT6igtKCuWuHtWfijQg4K8TKEUVysMoRqRRZXXzXveSXz6KwQavRfyAdAt7FoGN3dsmDxsh8zVaj15rNTu",
  "key18": "2z1tFV6TzrBYE3MzbXuF45gVgXxRZwYB2kxvBdYahMzNgPixmWfeKL8aTCFc4vy2nLwgNncEyLFLciQ8gdoKbLYv",
  "key19": "5HMZvWttqymSNoMzpPfbkmkTJauxjY3eQstwR2vKkaSr6BHoPxcqLNkJxmneqrhtcVjQAXwKc5V7BwHMbTjjPaqx",
  "key20": "4k7r3xoFLKbmJ7PbCCc18iavaTY5iPtyjkR2rsdBWxB4VR2ChB5zKEgcpKs6jXXPkFm2HoxEYq1JSJbzu3gaTAWS",
  "key21": "65StNBfuE6y7nhsxfzuibuZBymT6uA8Zouh8gCU81whq2WvLDsS1LLaqJQqZkUSWUFKBYxvsbBxMoZApGuie7AU7",
  "key22": "MSF53yMGJFbB4rufgpzvEYuqhXwJ8NTRpVu22NUz2UrmGtccFvJk4NfVVNyFPL8eyBNDDgN8rAPjUzAqoU4Nksk",
  "key23": "61UDPNHUeCqqYpGuGWxRoAzY8EXYWSv1z9BpahpoyHHUSbB68yDcuVaYb3UHug8rjJ7ZP2E7hgv7ap5E6afbH6Ng",
  "key24": "3cU52X31bsk36BW8SUFC4FFaiHibXHAps5Z7uwMHY7RJhte5rJCNDbv8YsAgvjp2BXUMtqZyhea5oQLY3azQKktC",
  "key25": "2BrDsbFciD8wBGXeyyocWVJTwo72MccEmsrPwgzBGtAEMzUvHroktLmUn3H2BxwWcnCpD86j1rGCCxQRNJwcNoTd",
  "key26": "5vzrGtoKpsTm5rqPPuDcVD9Geong7yNRKShoaG7sjaV4QUF6sPp4pQKFsogbKXUai3X1naa6u1YJ5SZ9GofAnFAM",
  "key27": "4HhPGsgwTTT562ANRfvWtFdmifZtxQN9StG6YWRDzbQYZpskgqGWFXCv9NKopKhvbeTEcuKsmnq9qbJbKi3P99Gr",
  "key28": "eJBM233z6171nf2MbKzjmdN1DLTWPGK7UsLYayRJDGBktoUdfWXhHFQ8c7QUHT17renfw9YRrYK5yG37qvPahzu",
  "key29": "3Ctz8YMiJuKWBKJBZTX9wtt1XXXSABb9pdhYyKBiTDsa8dKJapQG3pdvX9quJeDbobrffXKZstmoiCzYzxHi1XJ2",
  "key30": "Rd2zLEjRVAvMMjjv5fZ82wwZzLRvvVbYqNh9mX1uwgsKcY3DCWqbFK8ecWRrmmbpUiboiMK8oMkSc3vkYYDi7S8",
  "key31": "2wWoJMdpgj2dbK9Sy3sk7RUtLu8HRCamhbzHyiFX5GwJNPhj1QKG76LBnGG3X1KxhMdxTBR42HKatGGPgGRPyzeD",
  "key32": "4ECtFPkqn7U1B6Sv3z5uutKe5T4eGuZp66NsxK9WsD6MLAVgqgNYKvNSPQrL8zv2j7uJ5dX4PcgDNKreCpt7QcSP",
  "key33": "4pWC6c5mkyJyDjpWiX4keSciARyVmnpgdd4tqzTVwajLcYrYSYCxPqTqiYJjYj7RmeoJyanetxiGP1yM6knrfkEt",
  "key34": "35f1J75o5sZ91uNvSXynfWP2HWFhWYnLZs7NEzXTmgmdUQrqmS2h5DkXzussDRpyb8BJFY2PyE2y6GYejAUbjFR4",
  "key35": "4dDrM1ojf7UNK2E8tQiLSn53HBB4e16qdJwbVxYBGmhm5sRw3YgrN9VZ5RXg95WwKvddXq3Fuf9BP2e3onKWbidQ",
  "key36": "58pgtKeKT1jsBAJHNqpztCL3VSooUhEgCcQkCtKqtxK4yUJAYXt37DfwQjS33zyibEkmvp6q4HotQqRrMdGXBfDy",
  "key37": "45beRxcdxh8K6PiZth4Zy9ZDfTkeUqvE6QRyoqCY57xG9RC49UoTBxjDyhtjmM5nxkSPBGFWCJPMqknEpaoR53Wo",
  "key38": "5LW7VKWV6HRmpMHZX2mu1kBJjPzK9GfSVYyiD1Bjyk3XcjvERUHWLDde7BamfnrZ49GEm4vC17FScfZVyzyXfNj",
  "key39": "4uop5ztibmyCozZCKF95mwHr427pKxurG3bqRBLAwzbw9mC2K4FWAHNtyAh1FzyUv7wr1YggJoc5Xf9uU2aKNfo7",
  "key40": "41AgH2C53dfQkPBd8DAxNNPkkSXaZ5G1X9ryLXD7B8wKW1QMVGNdVYBx3XcZzdGyWJ5n22HnkJw6stANPpNDtNjZ",
  "key41": "4PDESzyKhgerRQz1CJsi9cYQ7Dvznx7vKQg4xG5fY8p4wnQ1f1DTcNWN2mJuVa7rP6iNLx8Vb8AqyA9zkfs2PaTC",
  "key42": "3WjC4Yd7mFbQBsiQ8FM8gNxjVFAj59YjWJ33uv5YgL2AJzErWeHqhjDcGkxtobJqpSorjLvLSNY2Wdfi58x23an1",
  "key43": "7GTZYT2kWnPacE6BKacrRL3SbHa1ADr7NNLu8Sx3pKxokFnoAuWCdYgwULgbsoBtfNf87pyL2FKLavUj23zivpz",
  "key44": "4SJ6ZfybHfZsAU98wAZbDmgbr7nsa7kwT1N18NKvXSATpTKXKM8zC7saVVqFSf6fYLhDpJpCsUd11r6aN6D8mbeA",
  "key45": "acAmyUt8HsLL2Y3Kz8tK712cwXjVrnqHZtb1waZzk2zKnDNZ9nTHih6Hv7eZZpojeSj3YQcTdPpUgnVdZwCAFKD",
  "key46": "3BUEMApieMqQTw5tJgp9NDiEfUVCv4utkbWe3Socnv96YVsdAbZHgai9Ui5absD7S7cM5ZewkQ2vFGEAhTCpCxJb",
  "key47": "4xbXwrFj33KzGNHpX7c5yPVZNNj613vtqnYt3A4bGwvv6zqfdq8RefxGGtKS3GX6r77s6XaPq3mjZTjdwcgacnXN",
  "key48": "cgkvyvkk9ucaDAefjDmJxndpfwp9wkQBtPL4wnsjymrMpQei4d1HPSFZJDqyZFsTYJcX2ahcBEb8RGy3HvNnvk9",
  "key49": "3rG4LvSSV42A8fthUHxGsKHSPPg5mFZp7U3JUgf8LcgHvNbVMWipUi2FoyZSKV2BNznvua3ZSuxCc8NzB7Ph7pgq"
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
