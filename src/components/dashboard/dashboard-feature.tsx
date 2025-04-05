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
    "3pamLb2dwtQWfaNTc3e2azubh5yjb4mDGFjZX2YHdyB91vGJ3GgbhAgWKutoDcTnR8oHXvZkemrcb8jeneczF6eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37gkGdpWmYB5jSgPzp9vs8s2YgrEzokgtJkPG6VMapnAyiG7923FDvwRPWzmyfbDqjfyAf1ZDYXjb78GTcgFx8CF",
  "key1": "2LrZDunyQ98c9ynYXgtQmbi2fdGYDzqxPsa8KeMXyMZ435EodiciXCREgddLjR4tpVk9869mXjYn9BpLioELUEr6",
  "key2": "5BzqqupLFFFw4fycfKM3N3dcCnZraSa8AdCMXs83yxTExh7VJTem9dCXfhAxU4KUkjCgPCp4qByjJLiN6rxnuqcC",
  "key3": "2ynLwJEjgCEx1Q243QuovHDXdGgz7dhT5cSM9gumDwwDhxznHRYMJGfCy6UMmXXWUghK8FAj3JrTFzTzmXtFBWiy",
  "key4": "4jX2TdoL7282Yge7qtzxxh6iWAGB8YKp948HYzhX4KpMMcxQXVmkefwkiNfmJHayJuE4zLLGgXpYdzZe7kKr5mG7",
  "key5": "5NAQfZFSWRqj1HPssWA7hHKjHP1bykQZLZXJRLdsgVLazxiNnTgEAQCPKXtq3K71yMQCHYDZTgNhM2UbRbvDCE49",
  "key6": "4RB2tPKc3FghC7NhcD8ao59pVqdEtUk7CYLDwKcGbTUVWdrRWTJzkCxoQxNXSfzbxfPMhqZBVRtC15PfxcHPt4sC",
  "key7": "2PH51xDFrsSeYwCDcVB6uXvRMYTHVBuCiZMSoJNsRtChjMkrpBMEpnAV8nM1cHbv371WizPEAHPbnAmJ4GSw6kuL",
  "key8": "5HiGzNkCAzCs6adM96FS1YuCMJHd1emd5fhwXFmABmDSKMZHiEgYUP5RVc4nvZ5BkL3AJy82RTe7uvM1q61sfPDx",
  "key9": "67XYdNxPQNr56wfCAgcFya1vpMmr1Me7qtR9gTBaPgP2fcChWdBACwAxmCoDZuahvJAT48cpwmkX7ysaVtcLU2HK",
  "key10": "3JtzUqGPqXFqS86Rt7Kaa1om7MmUHi9NBK2dbKWLM1ZkeuiNcYSFoqmoQqGFBhdEipP8Yo5PsHMuBseyvdrkTGcg",
  "key11": "33rHHmZYk55jCi2pxqQCbVFr3y67NSNZNxVeDb8RGjhm9iHRtGyueqjuPSwNwWtduYKw9oUsdAPQbaL7uw7NZUXi",
  "key12": "463bTeZjaVdRPT2ZZwm5RzjmbowPAXtPUwbjWTDZDM7yHdkaYrf8XrWbCEDQbs3qn6m583A12nRqvu3L2BU3f9MK",
  "key13": "5sikwDjLfV7dvyyqdpXrHzcfJnvHG4fKnsBZ9c2mKZ3zygbr2MgfSpFJiTjHWKBJHKQrF3MrHMFwVMYEUVbWaP4d",
  "key14": "JGQkhdEgVPoG8dnKXkoMat83piYJ5egiPJanXfzE6jDupwFALHsBTwhfVnRhGeE5EzBmBAVLJh3ffb7UDKFSy7E",
  "key15": "5TzH8oNJBb1qre7uHhZjUM5gPDZGfy2woG2RDTEfeCtf6wK5oVzk5RGoPcaDASv7csThzPpmbnx3yEkj9b9tofHu",
  "key16": "3QGpRVbvNaFLfLCij8VrH5THccRirDyA2XEquTsXZaD7iiKucmaDQSYE72TyFbzRxmQFwh8XubGb3V7qKb1tJiyf",
  "key17": "5e6zorYq9qFmnX9V59a16N64exrjUCo29sREndfqvNt4eNx5nFAoQ6YcBQMJEt8tdMmgdptULAVL3JRWACQnfy9Z",
  "key18": "3xzxvPsa7wj2Z22Xny7fQXtVgBsrVzL1tX3c535q1tiuf7BLw5fYYhj7ptB5oZpFD5SVrP5nqiVtQZrugUWdTouG",
  "key19": "2J7NuXqSosZ1D58JeJCRGY2VB4cxkKGR3d5cs1cewarPtV5c5JVxgyiJdbDxeziYHSnYgcVNS4G7EdzWzBMq98Ld",
  "key20": "5Wj32zV6FLsGpXFKHgpjspaeq89vMXbu2u9NeCNLK9mNNHEgNBQSgaK156omME3Tk5gAzAz97JjvDarkFiQsM1Vq",
  "key21": "heDJyPu8zqYfL7Eqe4tc3vzbcPd6JgzWxTieH6Wggo39BSBjHV7XT85rqbxA6FWmEBMsyKnCcoYiaupWhTC9djN",
  "key22": "5tZpTQbjXNy86PsCGfsfPfvivdozkTaiEgTGah3mRugWqmJD7EykeGshHSGbci5WykCcgACx2jZJ45RHPV1A7SkQ",
  "key23": "4TsfuShsAu165UQhZbRJqNM2NE7iZW2hSLj5MHQoKUyc4HheoSdkcbxgAESq7gYetzNWb1QHNgbw4pWuXC4o7Czi",
  "key24": "5V2sxUFDT717D21owWDCx6SG5jz8AU6WWYr4tCaVkAzLNVAEN4G5pwu6RvZLXGHzTngbUbyHNJ9bsMRUsNM7pUxt",
  "key25": "3CFeSJGcVJK6UaPkMDD6vcp1M9HHK7axcHBE1iLdWVLp6167LZGxHzN1fLN8cYPaXMWCWsok9StsfYHYtgyaTyD9",
  "key26": "5KiFCfoLuYqGes849xoCzKdkGECWjETFzMZQKh8VzUoGMirKDXPJ3hY6eBZnN89FGexF49mg3JwcEhjSjw2k88S3",
  "key27": "41C1caoJTWvgQCE3iygAVidHMSAeWUNvgRbFLxhHmSS7i2h9iea9FFfEc4Kh9gvK3YzBfhW3BtujBV9kzh3Fu4iG",
  "key28": "gEo5JJ9Xqqb158qLXn9SJ9cz59g2WCyncHEWn9KvQ6oytaugZ6mxckqFZnUpL5b7zKzLwfsD6CGEQpJoxZtRFdi",
  "key29": "5ZwC4k7TneiwE73uYwBAtxcRnSZaoiVg72KNwsbwriwzS2iZT5UgNLNqVtNZ8zBFXuNnmhvUwd8LzDvqzv36SzJQ",
  "key30": "42EsaBmZGMwrH7c5Pr7kqNR6NXeQBiVYp5sfNKAGBu8hm1LVMokQdrGqj542PnnXizChXYkrRvNGRHKYBpbpKkNf",
  "key31": "48mtZsqCDLJrfrLm4tGE8RdbehaW9brUGYLGx2M5Gkwp6yxVKNk3x37qfoC5YftWb9asKWVBARVrE5D1vRB9JTbJ",
  "key32": "4SQ9ECNc1WhQGXvUYtVUx7vZphY9X3uPH7spatcHeRAg4qMnfzrEN2bgTYfFSEJYJ3NiPF5pp7ccVaZ6EFw8v6Vf",
  "key33": "4uPeH5sKpFpPgwuafn6yN8eRSNmcas4tcVX3cUNPGfe1xuqTbfYusxFkZjtvTFLa23ASSYAe9CTvBZNAM9j6J1pX",
  "key34": "4K9ZTgFKJW4x6ScybkBtGtn55uXE6PBcDT547AA7U34kWpcEPhEueD3EqswVT6nPeQuwGvEoonoS2J2Jt6jL126i",
  "key35": "5a2qmGZmJCeaHft9ecoiUxykF1rKKUo745mnXaYcY5GQqWDLDtM6zKEv3RQaHBkHqEwr6NgASCR1WsVD684NecES",
  "key36": "mNbZ9HkkzvQtQRfgwMgWGzuZFRdhqWeRRtyuDciwAVNNMSYg5rMGPuxD9kVB2qEYM5hmrBWGwUjFYreZkgcLGhK",
  "key37": "55hqtKLUHZVP7NfMTBgz19rPNLcEqdm5ChfJD5pTrGgAvPXw3sr7sLRQViD5BUsDMC7LWGedWBwveBpBggMiDNd8",
  "key38": "3HkfsT5rnLaoHiXhYv18tn8ghF1bAq1Dv4Z7xMU2kphcmknHy3qUnuLx3Lv5kjaSht714Gcu8ysKVekyhVGa2TLx",
  "key39": "28mBaSZrq62DQVEdqGSswFVosBAnurHAZgwXwL9LadpVPTCSmCCRwkUTA5SWRbEUfZTcGgnUoxGHBWpcRopbFPsV",
  "key40": "5azRfnzfTSx41oxdb284LQ2E2suUQ8LL2pfrcVVrmNoWDN26otaTqNAoJUGSmqBJku2G7vFfGon3GRSqvpMibmU7",
  "key41": "5koyHyFikM7CTNRSBUccH7ig5RhW193MdCqPSegccrMzq9dDRWKQkrAsbMRaN7BLo4DgPWvaBHuTiB7r6G2Vrwcp",
  "key42": "5yvdquQ77DtVBXVygioCLsKJBUDwjk8KW1a2RSv8hkWsvDpAxWSHboePrKLdRAU8NgsNzU9dLw1dHJ7EE4pvWz4e",
  "key43": "5H1R9pDBeWU5BPyEz3BgzvzCMRdMv9XCQM5KiVLbmGSsTGGt2XLAqasbjYRQukdUeWqGDsnPHsxuJhBmb7fQrXN8",
  "key44": "54rg2q6MauFo4QfsPwPQk4fy5AN9DyMEqQxFUyAR9aWtXsaYsKAbrz17hmNuoyfLfwaksAM86qggCHeZ2Kbt2fp7",
  "key45": "xkkPh3mMKyWR2eAhZtyRbzNVL7iJKYMLS3uUrc2QAVRppFUNxsaAHVAFQajRtSTEC29WaY38WqTQ58qfHrmRA8m",
  "key46": "5PhoaTvwN7mC7Mg3h13v2rL4bzGfU4c2NV2RFNi5xXukMriixgV8daSaEwqGwgmtHxAeR4b2rc6kRM5sVDgNj5u8",
  "key47": "3qacSin6FVxv6cZdY2AN1GaPamPu3arzZBHihhsdak1m3tkRnaGCyjQEEWHDkUvA58LbS47cHfH2fqZQ9GJgxte5"
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
