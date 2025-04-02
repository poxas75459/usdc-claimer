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
    "5b588g549sHMxACmotSCt79bheNLyDQ5rLbYkMC3ggU5kjBdik9K7cRUm61CPtgStDXezHB1Pn78FzqKZb9ecFGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CbNisFy8Shmgjwqke3SJKXo1ArcgttxiAHVrkvUAuJwH3MX5e1oYskopgAZVpKeMZJ7t7EcbJoF2mArQtMq8P2M",
  "key1": "GtD7fk9gZPHSwodTmZKuHDCLnutKig32hsU212PCgnCo6Qo3kKwfrDRQW4sHsvGm6uV4e7NBCdbwJ1r1H2U8nGV",
  "key2": "446Zd11NdB4YWoPMgeFeHEt49Setf9VrhNBADrmYW5RQC8RTUJdEn7y7vYHtMtQYr1Bafu8yjeoBVPyBiDCCDAxP",
  "key3": "DjePzk2vLduu7Pzh2MuoUJfqvL3ZEDLvLnhWbGjLeoPfGmwij7ms2ibyijxvkmQKr5yKCae1bn9zzgXkCWoihko",
  "key4": "2hKuEpqhq8QYSacaRC87QsKX8DsruV6ji9bzZi1cgdwR6dcvqZshhaiztjvo4HKYTRFNipzMGkPqM7Aw4QvxgguM",
  "key5": "3ovmWo5WbdWuVdxgPjuipqFWVwnTBaBfDea59FsBXubWEgkzKz6VSAhZ7Lne5o2gGxz1Z3Dj3ViWNrpm7zDDvGRm",
  "key6": "5jw73u45EC8TFLj78UzmdXFki29rh2jwhFGXFyfwQZN7PMPCvwarUpuqdbiLCSHSTBJmFgDDZTcccqYqjDtWRNso",
  "key7": "yUjpvgcem5gJp2mcxJZ9Bbyug53YiYdRzrcEEGL1xXeeNDHaRyt9cydJ182XCGWui2qDn1YfEWUoReLQFTEcNsv",
  "key8": "29eTwoZyQH4CKaaQiv3EMmGozpCkoEbk44RvvT9yzRuqcr2nwhPUsMVdZRvDSGjnK3t4UL27qtqwp2M18eacuHDo",
  "key9": "3ZfzfQpAadVXxftm5SUz23aikMkMweMpoSEjmRyhf5P97uKYA3WwegCNT6Y4zoWWBwUES6hk1EnQ62dBgXkw7BSk",
  "key10": "2f7FFjjX1ofLRyadSCUFaNk2mgrKvUJ4GNyMGRWX2xVrzgYoboYVNkYLceDe1b8XfSyuMqk2KrzMpjsvPUmfiGLQ",
  "key11": "4Jgsd9oGfP6CrX1yUEapX6iL81Jgx3gHx1DM3MSh9xLz7aANBuRwJq5oS7DTs5ARLQ9hFFkjv6q8xJug6z3KEyv9",
  "key12": "EWireGFft2s3w54yFrwQ1vkb7BFrijMa9k66nUECnAXBDpzK2iAKZcnfDnfYjLLRq9a6LcnJNpJSDqLTJ9huGjZ",
  "key13": "43TpsQGmFwMusRdcPoUf7T6PeaLsBY9zNf7L9F2uTNf2qrmShFBgcpvTBwDpHvzvrwmTaeEFztTZxNPVB1fM2sTa",
  "key14": "2yDn7hgxMVnoU5oQdPyMDoBfZkSHPa2KVmXYdK4ADpLmNNCjzX2umWnuzR9wNsrPjqZsQp2k8i7gaR8iS6JZjQgJ",
  "key15": "3gc3imyXwsP9sPctd9JS2VrKGDmEZKe3yRYfxTAbd4PFM9hhMAADijDiar4Z59UapTKDKrC9uBTachvSenBrmnPx",
  "key16": "3KPaV36nErP7RnZTY7omSjhvY98yHynHtk3gsMBsWWjQPD9FzuGviHKjSP3tJamWPA4jvVaZZ9CwvFLPLuLFtbFU",
  "key17": "5heUJhzkUhFyxEFbhEMaA5665VGgCaRkh9NNHxcv8ezx1cGLR4WVL55GQZzpnBS81E2Kb3b5a1Vpe8c71vSWrcsa",
  "key18": "4XGJoSBcYpjnSwfQXtpy2j6xfACZPHHHUB68yYpMu3FmWGdiuZwmjZpid2kVXgrFwJqZcavSSFWS1iB3pLwd68kv",
  "key19": "HaWB6WFpaf7Bgkp1rtWS7vHacJYmGTpycYh12KeNz9niXng9zZgxRBJ3KfFS4CsRcHEeZuz1X1dQf743REgPoQU",
  "key20": "3d6q7pcvPm1RBZfcn2V1VGJAUQBQtPswbSCedDdiEzikDphWChNduv7T5qg26SndKtCL9wpLYr82gxC3N8zFJJdh",
  "key21": "4qs9pvKXgh4AcVmTQSUfWiC8LzztnDDtAyDCz4LnKyAZQwvrzHqPiMBD4vAadekzDNnqfpdc11gdU7MDv66yJF7y",
  "key22": "62gWQFpMAE51kg1HhgU8x5iUjaCqwvXTF5zM9N6MFpBBNKhJZaUPtZszZvFYEhPDvCbohEigcWuGhR42ZyaJVS4m",
  "key23": "mhanD2NqeN2uYS8zrz81p98uXxJwZa3K5bFt7BhYGHqjBGWKeMpsqhmwLiPDw3dutGwWQnCd1cjhpm6uod2YJ3J",
  "key24": "23QYYmZU9DTX8EymANhZBLH26mLTwvrUEb8tMEzcmyEXwKjLUFe58tf7p2EtsXXCsoYLCvExAetQrz8HNweysRB8",
  "key25": "u2uVYECCXooFdQevUhjY12XwyogahSvsEATrdMBAztLCQ59tLPokVo9x6qEuKDU4NrQQZBopuQZNoNQkq6XJEjK",
  "key26": "9RXjPm3K4HqaibWqDjLNUWnBsSkfPhcu5p6JA5a24x7cgpCARR8gZMPFQusARCPabzHZGJ1dLQB5VmnTte9eRuX",
  "key27": "4fJ5ZabjTzkSruJUzaB56jZYhQk1XtjC6ekq4LK6F7BN3A5RR6htdWtrdh859kA9pf2YgTkZ4wjiCQrwF22vYBXg",
  "key28": "5YqjJKnE9mCDoFTNrVi3bXgRhTdGnirvvRuzvuA5HUJfZvYkQWMh5PSn7XGHC59Uvzcx9byYTUDY1vAy5sxdzYPt",
  "key29": "2geKjkxG42mzpDWjDrXrxTh1wVdE2YdWh79By9tUb6EdyKai6ra1xcPLkKFvkBcNYmuVHxKXe51JXy5N1XV3bdse",
  "key30": "47jkkDPqJJuS1YMpSHNcL13EK58JgAmk3XxfN76Px32Fu4TBUHYKDwmqVS5j6XBYpK34wNFRhZcR7LBC813Db8wP",
  "key31": "5EqhQ79kjofVtud2sATKAhYKD1AJoQ482ZipXLkXb9nzogfVkidWWodK6Vq7rEYmRvx422cLAE6nyDrgaD7ZGztm",
  "key32": "4XA2rSC6b43hmTQNvqen73n48iCFo7fqsGwnMJV1MPvVPwe3fm9ZDmcdvj12rPFot3pUMpQyqGxvUvszk19LoHXK",
  "key33": "3nKgKGUJj98qyauwjNdGJePEc7WohrzeU5YHSEKJNwGYCBzZxwtHqrLXmiF2sbxcVmaUBRAP1GY6ndyp8eRwcwaG",
  "key34": "3upK56P21PMUVuPwkPbtmi1m5Hk3xLpJHDqSjxQkEXtpfm5WbjPzNN6x1GgVivXmgSjdr7fZfFtzzEiqKs8T4wu8",
  "key35": "2vbC8gNfZzVosXDzkJzA3tyFYXQwTUXderF9quEPgaz2x9nrWgUUqWVmwvccg8w6gsP5t6M6FZS9uzFyWnqWaSf3",
  "key36": "2q6XmJMP56gU9xUPKyFbCPx8wbAKz3NvxEx1QaG2QCkh21DL8xeHkU645cV6aeSzex1b3Se7ahLKzmG2PrT7jvWc",
  "key37": "4FyXqsdUnyXv1rd6F2r9RXaM3fBhYc1kUpsiRrZcG5YiNHpe6frj1KR8eojLPzHzDHAfu9W84WMWhE6GmUbzCqH5",
  "key38": "4x64eKsVAV4LqtvZKH1oekcTteztBpKQXGQwmmhru96cMkDD8vuUbBqUNQVCFz7GfxXSzUin5z1T6ZkDrvKmLnLf",
  "key39": "g81ED2z4KMrvZhhySH4wM4RTwmscSmTrexTXtMwKrcxhmh7S9QMybcQrDvBovUvNPx7oiVrMJgHRxyhUwadSTWb",
  "key40": "4c3qvGgfSzSNf55KSnb6rZaKH9Nn7QcN3PmkH8xbozRq2d3ccX6SBDkhJTQqPUFFqWk7mQHbGZuC5wxBuxoRsg15",
  "key41": "66TnmNZendbf7ZgiCR79N7w9YhTMRPFpSksENCENrAa3o3yXg6ehA3V8WExzgWYXHgUf3KLxWR1prAEWp3Prgksf",
  "key42": "yW3YeCrcsYmegEzuaDkNPDRD229rqdNGWBycwQkh2VWEgGo8DKYK4s5WooFsG5xbqaCSQaeqL1pn3hYeYzM7Ms2",
  "key43": "487sdpk3zvEhrDKYu5tdbtwNuaXZmgRTPCrko9uPgsR5atkKWENkgcpzzZopHzDjHvS2XutAoLyWUbqkUsXMq1AB",
  "key44": "3HmWfTXHsdupH5ep5nBUYHMy1QWhpFkUj9K5Pgxxhej8KKPgqC9bK5h5ow5uHPc6uKezqHAf9NxWFqeN22Xijkmp",
  "key45": "5saxDAXQHuh9hT95uQomqadvYYucdoL8kdegisqQ6v8wxWXkHKJnugUG5Sb5NGg2aquvThbDJ6iaHNASqHRuSoMY"
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
