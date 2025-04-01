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
    "5ubDyMQzk8MWqcCxKJVF6LmsmZgziwjVbFPxkT1V9NxQsCx2aEtpvSBuC9MYv3h7B1Yp7XFS1av51TSHJjaR6D8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51J1dVbZkSuEF1c6jHHBLGPfTZRKed33dnRCyzacDbH2mZFBVoSPtrdeX8kGnW13WtPpp9yRHYNDx7c9ytoSvsDu",
  "key1": "4FeD4ZePNTNsW1nzP2CfbzAPB6g5TB5RUsNVi9xVRRez6h3qg1fmWGVFF4gbvEvFmVnDQz9yf8gCQRgZpUNRKmyj",
  "key2": "HoMtWfKUC8WzGKTMEsBfaN2BwXveZTm2GvoSZzAwSAq9tvqRLCbRtfRMMXi4cr4WYpjPkewVjuvD3mSn1UAX5nD",
  "key3": "4JLBAzkhGeSU9dXgdN9vErNEzLTEjZ5FTAnn1Rh5ujBc8iEB74PAmmBAGfY1DZU8FsLgMnJNu2nWucQ2Uye8DazD",
  "key4": "62fcNnVMivsDV2VQ82UVcT6iAX4Am4e8TFKV6n3Z9x1KyTaLB7sr1RNR1YSy6kFuhJB3rirRRBkCqzgwx5ic7krB",
  "key5": "34SBZG2my2kkbqXT4rpTHD3dDdp7dh5kq7Voz62QSzYeXzFaLmyhnB51XSTxabMerB1Gdk5XDSBmrYCcNyoky9S2",
  "key6": "4pgsXpPXuMs4k1wxTcgwdZVrFc3SmCk6fS674voA62jjQjoXVnmijdas1swtgm2QVmP85UihRqQqPaKeo6ZXvrvT",
  "key7": "399f1rzZsqGa54yxrPhQNjNv1EHKgTVCWWo4QSGYYNgVHxmAdM7J4dSc8vt9BG7hXWZpzXamosooy9NNZWLay2AN",
  "key8": "2pNiBpk78Tz4HPgxgj9yGhzMsGhsLbnqQF983r8zLSK6YBfefrWBh26fT5nTfaXSQ18oULwQ7CsAYBUGFNcShabo",
  "key9": "3CsT8aS2hgi4gLp134zjTATfJH6LvE8BK17gSFgiZrNwUVwbs8LhaXYr2oXBGEHdrCc9cmSkC7yT7d6C3pu2xtSf",
  "key10": "4hHGWwv1vUFt5o8VMk3pmJZyGQryrXfyWfiWRiUc3q6az7uuymz5a1w35orvH7xzMqPv8sDFoTtAWhed6Jm9rvBa",
  "key11": "VGWQxWG8kQN7mJWjBbwr69gMBn5ZYbnKR7zUtyg711MhvpCY5FdtRmzNhzbMqPGpMBx41GZVLaoVvCex8BK86eC",
  "key12": "aNVEb1SbD47sLWizucjrLmGMXDj4NRHPjC8EZ1FNqSC4WUSkQVNhoSmYpNwTQmaZDgSBcUJRJgKFSCuqYMbgq5A",
  "key13": "4WfcVFTotQ79Eca3wRzPK6Au2S4nvWM2TdLUpuQCFQnotMHgbp8Bf6xUJcSAFhTN6qGnsiNtkt7rg2v4uCCtMDpz",
  "key14": "XPbJUvvdWwKVRzimxYgBRUj7tvNzEsqvwFQLMxCwF94cxdTvhEPULG7q7DrDYR1XQAyUzgMDANQjsuFCfbL7W8A",
  "key15": "2rfd1HbRLMTFJtPyLKcaCNk3yH8sRjyDXe46Pp5ieQ1H8z41QVUoQSEJmvW4sYSgm32LkRDJXWz2DMkLN4BcJb3X",
  "key16": "3R9jSKCJ5AtnuJ4CWqzBAYwszDWwMzxVKhazq4LHHUEbiNoEQw2scijfCVMDkpiYGVDcw2genPxXvtu1Y9qDHov8",
  "key17": "261ThQD8JyQ29WQceFpH25MJ4PBWkhZ1C26U2xFvG8SQAxpYYHoFy28XB24UV2YEauFDmQno6XUXz2AA8E9Tr6MW",
  "key18": "2GFrGcwMLJR9g8PnKmWKmR4Ezk9z86pERaSUi5L4RtUQC2Ak4mbSUbju1BFXv3fPs6e3xW8g22oKmYSiMfGByZC6",
  "key19": "T5g7boASaZSRAhr9KAKM75UvbAyb4t9vQfe21FDXSJvmJEGDhU2HGfvzLWVwYujEiw7oX9xs3VHvJAAWE3UDgLu",
  "key20": "64XoUbJqdKY1WrwLWHXGjRnqNaojPrpt1iBC2LXAXHohMKMqsZ5V92t4wDJKi4V31oyNv5HNASK8iM9FfNhYf4F",
  "key21": "28URnJscmUmySnXxn27BpgMMnbTo4P8boGbw9oz1c27CMdFq59LLBkpTSLg2CZjmG8MCUWi7RYnAbchPRPiZ9rir",
  "key22": "2T3HDiPxVH9NW9aJmxv9vnC52oNYxBBPQdBGRrbS3BX3zPJ6rz6kNLSAj3D299V6F9YvGsCAH3DqquGM6QC5J7AW",
  "key23": "FEWBJowS5Rkg9bNpXy5HcLF662KX4mCND9ucaYRfYW1dM7E4j9RxdPW9u3ntL7o3jFpr8NTHeDndMdyZtW8yJJz",
  "key24": "474Zcx88SRRYo7TMGdaWNxFoNNtmowqATcTqYDiJ75Z4F5f3nure3d1kSwBNs3wCREgsAHGeyLi95PmCFmhp4VZw",
  "key25": "3JTL7oTtK2Ko9inKDRr2aRguoAGCMkZUbdQVHF4sCnFgbYWG5pGyUVmK9beWTjypEnNKjirJ3i2SwGYW3FCnzJpf",
  "key26": "3yo3KSDiPWusZFRye6hz2ZjhZxCHLCazyTVE1DZ8kYPfQfccFVHBAydHGCwgV5j1jBTyWySM4r9JLd8yDCkimG9m",
  "key27": "2hYeFUQmFVADhwWcUKv2Hx4ZeBbjZrPnqqR2GxYi8SjvnqVn7u69Uswkp4u8jXgD3qLpvWTTV8ADVoiVbLCkjfpL",
  "key28": "4YDBaVpkJx4JDuDVPLhCZbZQ27PKaFNagSfA3TrFM8yoqB85JcesGWQUUve4oCBiGcXTwUUoYiLcUbZQrTrvK1oL",
  "key29": "2DHYJ2Jo3gwGgMw7jZ5qukqhTG6H5uLZJGGpivMS96CfiBWmJpqR2ubqk4Fgv13njwzcWagV6L2NDzZoH2PuMCaE",
  "key30": "4e15DStQ84HWb3YTxoaRXb5vmPjWW7gXtptQTTVpj5kJ4UhykjJLdm9uKYYNYVGWSpEpea6RbgBqxyVc1z8JSXXz",
  "key31": "4fusmqDmvwBdcRBfDb2xnNsdbGFPBk1gLqgyN4Xixszg3hQuVsPccc3Bxd5DVFD4YXdiKTRvjwQzS8ywVkRmVN3G",
  "key32": "32DfePrNPfyjxaYT4cHSnkNKrvDKfBeebkr774mDoXaPQpbxuSntPujRX44D9g3ZT8y4dKeM1Yg6EWawm8SB6WLq",
  "key33": "39hnerKA3VSCfbdQpmSxCgQiCc3srdVfDJtgZyfZbKFZvVnGA8WYsdErRCT1RoHVyEJwr7rPLAGTgSD41HhATYJi",
  "key34": "51PGaEuArxiDjBUS1FewCUDThxBF1h9zGDaY8Fe1ZeUK4mS5WBQFaXG66wScZd8HwKWmh9mgLnkKGgX2k5PH2uEL",
  "key35": "LXi14rFsg16CYHqFsNtNueEbibPWqdQCyYSkurvZpb8teFG44n3G8YmnB2JGPAU5qK7w6cgXA7oXnAqbU5kBe4L",
  "key36": "4Qt2CnEPFEyMTzYoB9yLad9w3KnhFqZMN26tKXiw6WPxDovxjX9NSerbfKwysw18EE3jAjWYVXH1WezVyjBPVcLj",
  "key37": "3HAdAXvXwxvKPQA5ZSPGnaiXYp1SV32Vku3EDZtqQFMBPc5rY6nWTW9wjXGzJ5dBMppXbAjage6ioBFagYqZx2Z9",
  "key38": "2hCCiejY6dgB1hS6gNqdBgvJTjAtQFGKScXvc92xjHcgJoaKodXVhoPr73j2FJnWS99aNgHSV76ngoqtKNWaHGtb",
  "key39": "4KWk8aicW87Mj2n9JmL9hHLgVXGaHaQFbyLbFFTixfkod7Mf8j42hKDzqPzBTbLUSfc8ZWzCcd6SekNwMzZh8JtV",
  "key40": "iUbNR9gBVjNgYAuNXcRD2XKUrpftyagJAA8exQhWb55p4bUumYxxNCa5nnDDLYfePxDqWgbccct3VZTsyQ6CafA",
  "key41": "5EDTYovqN2FKU7T2JBR3CSZczQAK9NxnnNUfkgP5Y82aH13kfJ3vWKKjge37yKNG7RdAnbyrT41tA6a7LMbtsANx",
  "key42": "5BWiBdztjJB3dtJx2g3s4pCVvPKAyR1Wrs2wbrBuxP7tjXmU65ph7A2h1xqqDcfMTf4pBN5CTLhghtGkyGZJtBpJ",
  "key43": "2LG8Czeu6DAhaRvKdsexR6RH7okiEPW1hdRau9aqNYL8QVE5j3XR7wZU69SuqFKXShHbYs2oEWheSLHzuLBWEMUJ",
  "key44": "4JWnTCgKKnKXeMBeUhxgbm3nD7JcmfjfRtwwGgH1SLGwhixvWksaLUwsz2icQcD6zovE9dvVmdgyARyE4PhEoi5P",
  "key45": "3X1Ug9DYciFXpy2vBzwMVCbcGh7bMUkPrzKZZwShANtBSTUA3VFAHoYJF6oB3WDeyVyrNcFWiRo76xTjACczEc8F",
  "key46": "4yTRHdgwAcEBC4c8eQfi1kPB98gWs8hFwrD25VzUeduFhhRefnkgMLQ7gsmtbgpBcxVxt1FkMaMJDg5ddHi9SM1X"
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
