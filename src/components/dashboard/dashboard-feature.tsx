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
    "mifk7jHfhr58pLm2pEGZMRB45caKBCMTfvRoDERRboi8kuWRmd8i5d4VF711qnqYThajBmtPFXkwg1jUtSvjRsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8qrnyz2FxWpuRade1XLdNujU9AC2jRaK2bcopHJSBzp8EuUvcLY3NhrtKBKbvmU42Y5Lbgz7QNFBWqosvRsJSbR",
  "key1": "3nwPwwn6aUepjoeZjVx7KaMtK3epvzhX6pNGBoqKUzfLNGkwh3iMh113W4wHRnWQznoirfSZoh8BTF3szcxqABNi",
  "key2": "5CjnYeDLHsGz2bvs8HhxjBXhAvrcQze8VYzXwjJ7KCEH8BuQckSk4ErwdXwHCxHpRdN3cnWDxT66cB92q2rjwAuU",
  "key3": "2omYuMBYR2ugxVuqnpeX7pe4xAA9AkefttkjLY9Nw1yNxFGQ6vEDC9Bx7HSwTN7e2RKUH3WAgSbC5xRdVJdL3ES1",
  "key4": "v7pf718JXXhvGa7ap7YFGUUZETWAV6dbyedfjvk6M7JGVMi9UJoSza3hXXReHNE3yzK4RkzFz8mab7jC9tKo8RJ",
  "key5": "kdiohAyXFaV74BxYT5A4V5acWpVvz9bmkC6RctipBXxVX7yjhtNAUHX8gz9D6YE29C3erXSFX3VPDA8WuLsCNj8",
  "key6": "4BBwiUG4jxndSWFvav3eTD4aQJDZvs1P2eu8f62Zhr7CoJhjb4oBqW6BXxNcDXLfiQzeEMVpQ4ubrFVLGZtUfYMr",
  "key7": "UmRsK2hRzHBE3qm5LYJfD5sU2BJXkswb5bvWWk8yCRJDAzQwJ3kfZowNeitvK6w4kXHCfSSx4Khiv1myqgYi3dj",
  "key8": "3DBeVQTywvK33TbvHhe6ArgAdttK7H7mB8Uz4ScxohvA6rc5ATSb3L6YJ2K4pR1Q7Njjfo2RyddTqk3HjFjT4CbT",
  "key9": "GLgvCHpBdbBnCdHdqfnXXDUHG1ed6wsHL1UhrLKazRNmMHUghQQCBavPsVGNYBf1PAqfKj3yKrfPbGJZTngWaEZ",
  "key10": "4iBqXHdpmFU81SJRr4R6NCEHvYzFRRzuLddvx4EP1Gv31GCHxo6nNJwDjsixBHARXgdZN32bo2rrrwunN1g689Z2",
  "key11": "3UjBS9Jum8X8UKKJ9rY9kwPZEUFnAR8qHwxLxczPxqzBYAu5iwF5KpfwiYxfqvos7zFadQFPRq9J4arkhzHJfQUn",
  "key12": "3i9yCab8toQ2VVohU69YF5jHXEg6ynKabAeHsduJJ29m9gR5Y1PdvtQZGaPHhwbbcQdxAAT3dy9b15kmDauGTSTh",
  "key13": "a9yRJTDd1BZuJnAdk37NjempTLYmApr2CmE7KxPLtFeWatVdbDEGMid8et9QTWGe8eiGYmTut9NyTspWoi4zaRn",
  "key14": "HyvWpHQDXLm63BxifQmtnfTPrvNxRsbB8JMSxYz58QZ4qKnAajonvySCnLsSAda5SZWYUvYhx7aXo7dqHMcTn5Y",
  "key15": "37ktbCvfScwhfGwV1f9a4nGx1dK3uvMGpfRCdqNaA6kNQ3Y4R8afKQFEpSsik3YjK5L9QNwAPSCpdNgGPcFr58hf",
  "key16": "5ApN4s3Q252wdH66vs6X32UmzkYD6bo5EG9DjLe8aJbsFDyo8soxz4wXyStTs5JgZ8KAfrXB94sTRzmdenDCkk3Z",
  "key17": "5WRpWP2LYFCqGzQQdEboN44JTgqtasvRDZY2MuzhYtFLzRbBE6wQUjTuE77Dces5TtTQ6VxfYbL7HjQW65bg5Sxi",
  "key18": "2BXT4Np8SJei5KYeTtVHDrMjSFUg3kDFF8DSodJuRFjtePfoqsCRS7PAzqQozDPAt35VGxKSaEemarjzz5WPUr99",
  "key19": "LYMUzyzwdE1p53qZRgcL69GmZrgKpA3SYLXXeAdvEYRkozgxTezxPLKwxQcLZe8pC3GWnEGxyWYcJRwcn52vBtx",
  "key20": "4aGjjqKb5ampTK9EcjK94au8BgTHYUzkyCjEHbZtpkHX2oxMJKNPfBPvHpHDCDGvmC8yDtobtMpi5EEdqCeeNyMM",
  "key21": "3jdkLq2aavP6tTz4o2EJdQDoZhVSiDiQBeCSNUJMp9zZcmYEkHpicZYemZqu1nxoeazHStHFqPzdB8T5JaiC3YHT",
  "key22": "56SJAv1GnepTWUYrZ93FdwFbKDFw2FcF2sn2MUVNyPDeDn5UAdbLKEdw4Dr13KR8DqVUSEquLyx1nTxS9k9Mf3vQ",
  "key23": "3vWs4XMHt3um946MrTCdtJPCSUa61ot4YWkEQUB729qZY8HshvSW4NgwdWEdKv98jzktf5uSQfBuLroddvKmMhu3",
  "key24": "5VumrgmDZYxaiTo1dyZkSh6GHqo5Vz1GxmEWSPrWkrdB6Kv5NnEXnU3cgmKXB2nYdLLrsQVsGvJ8pNgtzjKxn98s",
  "key25": "5676qCNdjhn77V4DYWghNPYfcFRgJHJAossZHXgkqFMb4nuHgt3VvnRZRuxUDToFy9eV5Fqkq8s7FqYmuNquaxRS",
  "key26": "43vCV7mwQarwdwh4r9BVzNTd9jGrFyZrhW51RuqG3sx3aDXqYFy5dXiA8YygTwwdZhiTcRTusQXiAAxh3k9gp4Cu",
  "key27": "VkXg7CeRuaZpcBskQZAdvP8db9eBQvseKYeLBMjvUf6nPjL1TaGFjTsUb4eGeNcfXRV7WFVXvpb1K6VGEXfXLKs",
  "key28": "3acv4xLraEyYQomcDiVqigBJZJLzKKKsdtAr4cmsRU2i9epncDBkoyCE2HCiXd3LdtzV4LPZrFDmRXSHxX3DXzsB",
  "key29": "SKEKq4BnCqU2skLon7v6ZFXNuY3cMJ2ZeHCXv4tn7WNPxzxaCDkdhwyzDbaruR9JdFWFKdeVXwDSRTmDUQXvuof",
  "key30": "2JiDvxJJWtDTfYbhj2myUTFz3kLAwu4A6MzJvxkCT2oXWZxRkEV2apHFmtnS3iBHjNBts2hEYjGxhTFi6Ja5EiiZ",
  "key31": "4zWZMEzB2GJauxcwnwTFQTcXGvjZ2zrg6g6rRG1JtCFXHFaYs2N7kP3DE52i56n2smW4JfGB5skYMNGqnbis7nAP",
  "key32": "s1433dPhYppScdAqXmE2v4ovYkuDtAN6tdiNGsWvmhSyD3xtiKGmACmz7VUferGpXZcygVNkw77WwTBY1oALxxw",
  "key33": "3deks5GbHDWExd7hi6An8m3UGgkrkxrHTw5ENWh4V5CumUm6uHVSETiTgwTDRZRJfLYyE7Y8dqg8htXofE87ZwFm",
  "key34": "2U1GLUDgeweGkPeNnWfS5oBBj1prrDJ2yHCkFfe4mjxsz2EdZzWbkq7GUesXNYmVGVvtMX694rfk5uSQvyhDf4Ri",
  "key35": "62uRStN1QPBrRyRDHyUPxvjRnzopG9x6EwJQhdLsmNaQqxHtFpjp869TBMRqnr5KrBYAoXuKRdtvKMQA5f5iWhUY",
  "key36": "5yCRFoGXZifWGVjGmFn6QJ8hYBJxzz4JZU2bujz2LWmVasvumkTGV78K8hiX6H4NSnPiPm4Buzp6HEX7t5T3X6yT",
  "key37": "WEtMSaw6MY3qj4fJzcm4VE9g6asykWuE5YV8fc78S9aaUArL9eihvRdEkEyKmvNdZ4UY9CE1tcwAwuMadpzd6ds",
  "key38": "9LjatNviJotSXCE3SaF8uhGMU6ainMRbhUCk9biKSvqrD1AtMoACsWsj4ZanhxpAi5xPnwo1Hk7hRcXWqSSAoaN",
  "key39": "659oPxoSQTVUph1vJWDkaA44KVp2HKnpgSkutT2y2v4zkxvQPAstMiP9SyMsRBQbynvwoatif4T5PXuNc8gRKPnA",
  "key40": "5Dx9YBN1GwXgWsPQdGVLufeY1x9agpfVhGsVXd72Z8ycZnaoePRXgb1mk6d8Qdb7x4b1zVdvCZEasuh2DGGzfgpd",
  "key41": "3tNZ2MoCiyDk8Azy1eQMQRBx4r41V5KgtPGjmwLEcZWAvhTth8XtZHvoY6FGMFKu7nwokUdM56rJKbHrJTsHhVUM",
  "key42": "2Mu49feEso3QEg1wdti4uCt77N7syNqrJDjxih44d5BPyYuBravfBD5HAVyrhuScrNZUWXgPNDRjLbZLtbvqL3av",
  "key43": "3KwKhXomnvDtSuodjdmEbzZmA2wzCuXeRe5aS339X7SN3Lk3hnJ95YGLcAPjUvxcHaaDTn781foWVJJe9vQ7vRLD",
  "key44": "67eBe2riLQie7GAUnyfbCTJUCRvQwrPpcAUJFWRp4cMUtPLVAfKHrpzY3aMCKxWXQjpMdiv6yq2bnEJ1CWzRDXBb",
  "key45": "25BUF5n5hX1uLBHS2TTLQ2vWeQQ1Rrw1UvKw2B2CxqoZtpy75Q5LwXtvY81kGuUcA4MfJjSto9G4uAcTVH9ighRE",
  "key46": "62ivSFdBsTijd6TBRe1BLy8PCx8LXWAifjhMx8YqMx6ycS6999n1P5XPwKVc3ZFruMvbac7QVs9GRcLy3JNuPwmA"
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
