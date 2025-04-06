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
    "4PrxD6y1EzsKWREd7QeUZTmGw8yQn2XAVSxyzXvyapPZbbbe9WnGWPeiwmcKR64dVKVLxj2qKFWuS8me7a1vU9pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bvUoRzntrSdADrUV82Pw6JDBXNJBbKnhm9Auau7GvZeCXeKjcCncuUKhaZTWJYmqrJanBFaD4XLUprSrexiZL91",
  "key1": "38biuGFa5X3wwfAotzztHDfjLH23hL5K1hNJsG3rDHvUepEEtHN73Au5mtSEbKh29kf293NsGroHUuzqVqDi7RC7",
  "key2": "2xGFfFqwXbeBSht18X2ivq378Vu5to38hxZ3HCMMFwLrdjYM4Fih9mAGKHzCtJVSi72yExdF3qjqqgVGgqmVuyTn",
  "key3": "3UPj4wpyp4VVLipoyNQAS8kepGeZMFsQZdhncyQEfP44yv6qbA8gfVEaQ5GK35gh8acw7qPRgigucQd6PKQrngnW",
  "key4": "21p2CJ44vbdHZht8vv8dtVSbH9RJopyFhycS6wXN35U32KyJhEyXM5RsFARBh844SF4dTXS2JpkiioiszjFC16Vp",
  "key5": "h51KHdSzS6FTeSqaLcX949HCS7FhZ7XFSrR2r8FoF6Ppcikb8q8yxdyCLvNyWZBxSrjWPBccGcqSURzetzspp9M",
  "key6": "3ftMPDLdVBFcVHEE8t9t5tDRj37Tug1m3cFUzX2j4hTgSGmmBKrHV9hwRdWB6vQV5g7hJt1MabDQy57vyWCCozyj",
  "key7": "5qbQxkkzMXbwrVLPJ3q25puzpd8VjGQxTmkEvpDNby1GdhpzCXdMpht9EPfqfGdAtRz2CTJ8KHbtMsNMCz2jVuUC",
  "key8": "3vQh6i6VtDTArwQx2Fcgay7XKhHwGRWs9AdsgXgYnz3n3RV6gsAHtrSHa79RfDuwu1PFSJbEs2SSc7DEGGuQ6o3D",
  "key9": "5Q7QHLEisMMnXdjDajD1TeEGV2Zzrg8LLym5hEenKpebpAq1LccEJebZvQ3Whxxnv6wG8sCPM3qeeJ7sDKVVgmF6",
  "key10": "3PSLNDY5sZypRD4CCmbhtxhhw7BpkkHHykePBaCpRqm2zEqTDPPTa29VedfCvXZJQywzvG7N2ASY5vPghjLMfJCf",
  "key11": "5WeBoYE2Ycg5qMDx4fK5qkzsFettfZkdyFoJ3kDLPcAEG5efv8cM7t7XewcwbXYVEzgxy88r3LwB3gPVLoMdhy7N",
  "key12": "5ozaKq8RfgbM8VBdzeV1MiUcsKN2nmNRnUa5KuMJLR4PaT1XYmfvMUJ9xkHeEM3PMrUUybrJk7ugNCq5VmTYz9QD",
  "key13": "2Pn6Vk1epV4L8cSqSkq9ByXaWbni889pGDNMRagWvXrMjzF2PX8bg9wAWWEyYXZWqqCiuMSnuGuR4xpNPtiVu7ov",
  "key14": "4rFDoZ67LAvHanhDr1Xx5zCvTq6k1hjPyGcGsFuAyWSyqk8Yk6i4RdbezMfHZGZL4kKaRCh1cRtabZcJVb7yEXje",
  "key15": "4snLPSTUGYkSoG98GDdEC2BwzV5THPa4zPZWZxUib37zoUXLsHtrXy7bFAgYEeF47j1qqzBX5JKsMTG6q3kFnCvj",
  "key16": "2ApJdgiNgk2REPat94vhSLGShpCSh2LNsEvpSmHgkVNt9nWwAUi7o2mMZsHQRW8rJDfPs4PtKQMxv3tVEv6YHeGW",
  "key17": "3UkBso4e1A5HJUdGbUxCEpZmXMtHsaNdxnqsM6GvNi2M978ARcgrr7Z2qXbxNDMUZZz3EwHcaUiHbsvkanBjKTU9",
  "key18": "5zp9vskEYJ1FpwGbSeoP39VjENAE71Q1QC5s1WZ1cYDpzL8M6TBo4awE57Zw3DovbGAb77VS2Qe2buqmmUA6ReLt",
  "key19": "2bGervrKLbmqVxjUQxS9TaWV9pLnSwKbyB9fSL2ANvhH4WLpesnXwrLnFUDL36VKu3GGPLuaakW1v9AJpGnxrdJP",
  "key20": "2ouzRaWw2jamoE3Fg5GXfRy2AA39c7YJ7JtgRamyiMEva81fJASH7wgJeqs8eK22f7jNbttQcyXrtAiKjTLqEx63",
  "key21": "FjM18nVRgeLdXQprHYgZmt6Rxr2afgN32XnFe8kCie7qGQyZALdQCPhWLRRkbWGbfV81kHyEUSCRx2DH485gf17",
  "key22": "4et7CeGXm97p7AsqQ83cfrpw8kwgdjQDKwDkPUVFrpkLhjGpoSMqje6kMcFYVmyFXLfjXEq9okuWus3Q7o4NUgRy",
  "key23": "4oM6bUhXZ2Y3fbExRkmMf5X2136Nz6Ua9HxVVorqADdgVixdWR7LG9hcYdc4rNHjxtbp94UnSf3HR341BAepJ8f",
  "key24": "4G1G6jrrDMawH8xumx3ScBqTaVHrPKc5voY2qhpC3izoWAJCKsrNngWkJssWG7677twMbEihqSpN9mcmHVkaiUXA",
  "key25": "hVk6uLvgVgo6vshW7ATWVQetN71PHGPgiGpayp5wgjN19FEg2nECpxkr2P86kyLSowNpX6QsPuu8XkYXDJrTGum",
  "key26": "4GdRaPrvKHuCrrEvowZgXSeKyRZb8YC3xES5dzKH9PcmXeCB8rhNk9fDRutXgqDJCw28Smm6Wt7Sskq1gBgFiqBM",
  "key27": "AqBftUjxyLYUjQSDGar9oNegdtJ1WsJHmk14tRp9j8NLjScf5Y6Qt6pd1UgSDqsx3X97EQXzWcXG7a7dTXVdDs6",
  "key28": "E4DSnBQTsTpUyZ8EAMxRqtukKPuiEumMGWXLW7f1q1ojTMWkEwXMrGoAYAFiWPotXZPEdeTvoTrpHVWYmV33xeT",
  "key29": "2gmyGqSnbXGVKuhFxNoDEHmNA8nBohwFZxsy1CNi6iaDYN2q8iCKr5YENakQpjiMxgLJPdUcNAbWJXgEuKUnt9tV",
  "key30": "4zQp34yvU3cp7tUSsM2dtsbudAhLP3dagVeQhcPT8jg6kerXLeHW7UY4jdJYUpxBMAkzsbQvPbiDdxvCq6AoReQi",
  "key31": "3DwswXzHssLbLEMPCZSMe5dpbcweuRQhAtXcQL6CTRtia54Nkr4QNhkTkkxX3F81n79zqVm5XpwTqPcorWSQteMt",
  "key32": "pytQER6bc9jF6xT9ZX9Dj8FuF9e7z4R6TSEBkUbuPNmXt7B2JK2aicgS8DoF26RdBwXJZsRLgXM42PKPk3eZpxB",
  "key33": "3iPosjAJR3pr7Z6BbQsuopPa2rMBL8ugs5qaF5s6PeQoq6iptS8qZdmBi2Agbv7dFs3XQpALcGyXQaPPRNUCMoh2",
  "key34": "469RKyBsdVkxALCgxKwyJ4s7dL8pgFx5zddtzQoUCJqzdR1w8uaTb44gamo8xmLtgewmMEKCrXUDkHk7jv3eeLSf",
  "key35": "2wW1feuAdFQJ4EtC2t46HGLb5a2E2M9hYhuvnVNafrNHVncKt7hpiuGvUd7qkBzWaxJpYMw6jbcovcGXY9PzjFVw",
  "key36": "3DhNFVp4hPaSXmKFmeVDiKTjqXSvpj3HUQoK5GLGFYNfb86QkgxfM4bRPnTvV7h5ibQQHhJnMz8zgAWnkzj8vxDB",
  "key37": "PLoBF9jHh5J853RhPiXRgqXicrk3DY1VnvuEyyntdbVedMJ6TWcDWJWSKf9iqhTCfMRzzPs2FDgdqWpwBhXhmmg",
  "key38": "VDVasQvG9BNom9Xgt1hWJdnbxorNSTwd6zF9y3UJFAwKBdKqGqWNG9Dd725Swy421TVcwTMyDukUpkLzJfG9TxN",
  "key39": "2eC8UuZFcoo9XgnVyL95hHgQKtbgJ9thWtCaHZmwvwekFWfqwCiUT6a4JaZmbkPn7YwFtdk7m16541kh1f4xD14V",
  "key40": "45RwAN48atT5LCpqEbjtwLbFmxB4GsrEdopYTVY1bWvXhqhwGswxLcdZrgEck83wXDtkqXFCj7Tfdp1DbphWVaDR",
  "key41": "5BQGpn7LytpoALoz4tufcuN5eSLTKPEEDDP3aRHiuDZQQPTizbFAz5WjTs4Z86hF75ahkHuqdVnKYxCyR3aeEEeE",
  "key42": "35eAhXe2xhaKysVUCW9Xw5qXojr1zvzSLCN4uW8s8TLVBdHxZ2N46xEesBcADymUfxqFJ7aYkFzp44CkG6Fc4nLm",
  "key43": "292ZgYTTHKzR8PC9b8c2jC4hq5gVR4j1RYs1ySSwKVCciCbMfXZGqkPQLGkzZxX6AqPnKnp1iLNuQKur2rsYGg8S",
  "key44": "3GxfC9PX4ht9j2Cjmwk1EjdRmAFdMZP3prEuaS7zgbfxCBJxbNqisjzZev6ezzURaSbtGatZWkDH9Dfy1h5DL7vi",
  "key45": "rdcv9LCdQP4LaivNn5uLsmBxsbgtjAfT8iEtxEUqdMkGq9T7KyPTFeeSu9Wkfj9mojAFhZ3VcpgVsDxM4ifr82i"
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
