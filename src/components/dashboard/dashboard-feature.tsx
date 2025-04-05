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
    "4jFA4HPP1MyDRqC5LKTkdBizH9jAKn3khf74xFokBXLevPPhPyyU1ZgvN2n3pixNpk4nChDy9L1ahxFNP9aeqJvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NRSokpJB7PciTV4znhgQrEwMHNqPaFKyvGGmwDvTEV55zukoWtVw8psvKs3ccuvrKPndJy6Z8cZf2BNKbNc8wGo",
  "key1": "3dQDmtwQCTq4cFigMWjbZpyzH5UpZMvsBxvc1v74Vkd4rcFQ5D2nxfrqKS6LHEauwZpZLbjPnvbdHKQq1gXdhc3",
  "key2": "3DeekZJhGjYbxvvoybBrbVfNAiJAmoMyAkyuxS22aFKnuWyCo7ZWNepgHcWeu2W3wi9ZC2fcYiDn6PBYRi5HUKH",
  "key3": "8qeqRhT8GuiMzCuzGxX6HNAWYYwoyty34PnYRraQnG1js41mw82BnPdR83APfJCZhCRK9wkVhgMN962ubuZegGE",
  "key4": "2MYCbMHSDeRruad2dvb9yMyKxzLeWBeoubjtAz1qkeeRsZiZFbZu1X9HCAL7wRK1bxtFvvm7oFaq9cLCLgZntDt1",
  "key5": "1pusLpFWWkqxn4vTgBLDLHfiiJNKJr3BkkiGBhZmH16u1KjgXPtTqzXSe1GrjubHQpndGwstaefw9UgngDvnk18",
  "key6": "3bDNa53EK464i19zbMihWtzJTXGmR1Ho87oNscthJax2T1ubimqyrNBpizYvrkTMGp3jHrEkW1jggAZFdVwC1R5F",
  "key7": "3yrwZMMTB68y6RFRR16Fe4K5CmKivneDoGyGEeZPfBePteUdFTaLfwrnuqGzjy9KrWmKU3FVdLCWuW5FNFdbYA2F",
  "key8": "5m1qdEwxqQnSNu8Dx2BXjQSp6Q6Rp6kexG35Emizg1DNQHxFhr5hBJ3R3g9mV2UqgQkcEP79NSDpAGU1H61WsrNj",
  "key9": "2yBmNzWwSz73QADZv9pdgdzvtzVTAvg6xMdDKjW1WXHf2AsFSxsdfrdwbdK3ctsm4DyDUetjRVE2wWNCb5Gq1QCx",
  "key10": "adHMZd2XeY6mzUPYXs3gKug4UCyn1XgMtNyMpH9PNyj3pE8n9YohQoVegQbYYFTRTrRnYhphMM7wszxbvi6Mzjq",
  "key11": "3AQxruPxyVTrkzg34oNSEYQHkdGXFEd8xbMeiezdkEu4AThoobbo9g7eEGaEWrER3kehuZQBYxHb1QM8HdLHRQnp",
  "key12": "3RyNKxA4JWE3E2AUj3khLzE9JPADPFxY4ciqbKZkAnAUejukkzeZWuiQnsbE6KtQi3h3B9okgjBZeT57EyBxxPMV",
  "key13": "5NrhJmBpGkeN4z9jzho7bgYXSEHPxX2ovyWJTVQTdVfSn6Yu6GgoEo2Avi2P68upwyAo7ow5dLXa2Jq1NYExPZX",
  "key14": "4dxUEFXYoGh5XXoHmcCHXwP21QXMhgcDB5GsbpRA6LBd8RsqoqM7w1NfY5413obpetyWxx4bDwNZeGNhJVoqonGW",
  "key15": "2pG4GqUtKCBjDo1ct4VsVSQmYMHtwUvjaApVk9pv8HgEyeih9AzPoXDvNRXnWSpdJQPNZE93QuRuP1mahbfSDgai",
  "key16": "5f6YNtoUwiCZfNJymHiVEH4JVDffobZvxHLHtte7V2ufJmV2LeDnoj4ej5qEfAhxbzxTpnKAg2ELbc81D9mvt4on",
  "key17": "StEvK3Ug2udquyp3tCHRwBQ3yFyedxkE7tn1DU8ezH6PXqjXgpfWaqZYBjsuTZy5phjiMKNxH6BaMyemGrtyB1y",
  "key18": "XUCmVcn6Hb7S1B9VwmJbhE5qsjiDGXpdmQNbhsz1q9acotbfmEPDzQ9HicYZ9oqLd3djgrochEa2SzVxDUYSSub",
  "key19": "3ifqujgw5JQYPeJo2DwNESQUhhWrkXo14hohQYSKNXaQkH2eSznuvSD9LaQqqbLe8osjcxFKzNkPUpzDQiLW1y8K",
  "key20": "23tyciLJXZNag1fQWQYjFghfmEP9xdermhEia7UnGE1M4yuYTUrmLGDpVMR9aWmYzV2S8HsRGo6j5CpEW5kapZu6",
  "key21": "5NZTWyddm2zC3YEQtWtrassarpYkoc4Z95FyeejoukHZzmCdkp21jW33b8y7nWA5mqz4zxMeLrTgvdp6u7xqaHNW",
  "key22": "259cDDmfBYS72o4t2y32R4BFzuwiy2MNDxY8wA8DnoZRZw6d36cHg51n4veT1VXThKNgx9p2GidaYH9YNi7matgd",
  "key23": "ZnWmfVqGKTfdGVeVxu3ixmvELqTLNrDFF3mGmkG3EvpyHsmzfyi7VgQA99cnyNAagFY2mjB2j8pnDeuYhEL3pUm",
  "key24": "sCAZfMPN5kqoJfadMSxrVg5m3Af3ULV4cEzikaMqNAvVAUeS6PTbWsp2PJFUY5J42vQNH98QifTDTYgoK292kUs",
  "key25": "KkiRnA6YEmhdN2SqzXuDP3BbBzqzUYp7f3YhcQw2PTcE6vePHf2VK8S7oNbFAXSUqThfoHfCTyE6zG8VP1wDaxu",
  "key26": "2UJnG6mk7PYMPiEguBoKTfZA1iTKGTJeGhsJpeEuE78t3B1J2Pee1VAEBU6aDGhEGALEPCBc6d4h29JrMwtrCQy9",
  "key27": "3zSstF1QRBPJ4dZS3Gg4T8LK9Dx4gb372jrsZ53a6NrQ1t8QatpJppT5hJjjiFtf2xQ4ZWGW8R8gHd2rCQgF94sy",
  "key28": "3N3k7F7V7mPK7PNssrFQPbiTfrq2b2vtrHwaJJnZibbvUYA2Dd5kGv4uuj9ir9HDxEhzz8yCGVSV7fnNZ22qtj97",
  "key29": "4cJzkUY46GKGtzmWfe2s2PvD27Ug9A43eMZBxWCqjsmeRk9wnLUwTaSK6hP55WcQMu33WDBVoumV9XqbHQTqNfXj",
  "key30": "45EgTUAkMHb4da8rQDuZFNnBmjWXRtvQmyvVZxFKJoM45Weoy5QdTvST2w8P638Qde5asztNYYodoDn8E75eMiU6",
  "key31": "2pJLUBKGxzFnsLctaDQ8PoGUyKGQxC9P7Cv1QUGjJnU6BicNY9qRxcDhFEuTTKxLDrwuzE8iBNSp7aP2dheyr2Tg",
  "key32": "5fUPSm4AMc9UEbbZSnq3di6HuzdyogoBWTKxYYUbKLRHb9H5ZHZi97qeRBFT4QsNxVhWBCPYLfm4qShtuHf6dMpJ",
  "key33": "4k66UKkimgkBE4xAxwWDzGW6aEtZR8xFB6FAeLkSVd1YVnpeN3v5oyNV7yeiMEg5DUe8cZFyd1Dc52KNkbUSjdS",
  "key34": "5jD3TFq1h6ghNhGE1rL7MkHgVkfoB8W5sQ58u57yEKcFEqaTfHv8zeeHwRAm9n2YHx9aBnhmynFgg5GGDh4v8CBE",
  "key35": "638j8Diayq7ZBUUn83XXciE3mU46Kdj9Axy1FsJNzX4wWGeKVi9nRLthQtNsrqoH44w2GsZR4qyU1cGwct8JNcLz",
  "key36": "5B6T4L544HK8VTgMCN78dQpbxYVtL4nnpGoWYTBRkTvCjjmVngtdPdrezK4uJwcTfCzEp2YVRrXubZMTAHq1udog",
  "key37": "58G85XSTU42xWHhjcxYX2tzSodpxfqCxh5ucQyNv6SegsVWxNnaKYAaZLSiDJn99ELA9Zk4bQQPQUKVWhgBWk88V",
  "key38": "5fCLTWV2EHMWKwMh3mUb3DvLsbwqYiD7fpMCfBfUrGbh7L1nwzjQjMx2XdFfd2bK75agUZywa6CBCL312aninzC2",
  "key39": "F5XnA9JhfnYnJ9HXEvzh4GE7qcjZpAqDPA9bnWzevNqmK9GvHLe6ZW9WDybhL1TssSdLX7PnroxNLjrNMoDHn1Z",
  "key40": "2rc78Pz3mRBPWNAoZzKahUMQJwhi8tNMVwZ9EzKhTv99mVtHENXabSkd5RKDKy7YGnaJWNabwYwu6N2tiZgErZpb",
  "key41": "3MVC5Zzic2rv9C6Wp9FybQ8D1UsNphe8jpfLcyeUoVwKgeS1FmHBGDniepPSrUQmF9L3PYsU5ZT3L6TvZk3pcvrg",
  "key42": "2ZNtvGSBr9NxTE7qVZU7oZmnJaYLJP2ztqFLbwRAjNGkumDxk3eYBR5cA7oRwBMmWMFsRXbswyiVZQbfH8VscKiC",
  "key43": "fCV3p3tnQBRBFafajJ74BNvnPbgQ1nYFPiLNxVC53bXeQ7C5Qpyxh2BQ1gnnNqP7C5eo42YtdAHCQoPcDnurj7m",
  "key44": "66jHPiZfMpukVGEhF311FYKM2dAG3swZApXeXCGpfi7PFtMdCiQ4LQseC58UiiMMZEX4BU8vsR3XTesDFKFzizQK",
  "key45": "jJe9ZnK39aNwLJF9ytjtcHb4gBUwHJeQy1L5QwR3rvinBdjM5rcYvk8HAAbrAHXogX3Ak9xLi449QC5xMxGzcrJ"
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
