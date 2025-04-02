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
    "5Ly467iUagaHABpCYKNZZDHmon5AMbA3mSFJuP6rmLV5KfWcM92TxUZSdML9jgvyUudDBj2XFXaeAEPScqtdYyLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wxHebRx39PbBWhYhPs9DJXvAoq2w5ErpVDDWugJ1KAMPhaCbtDU6RbUatWmZeMcDsWRtDUEhFUj8vyM5jdaiRT7",
  "key1": "4gw3ULVtEVGxN1QgYc2fiDi8vCcYrtX4NdYLqtRmXeqq6JjUyK69ZSDEeHqkj74cvse6TRtUsxGoeRSMctyDASpK",
  "key2": "Xwpb5S4QNdvPtpNs4R8GcnUq26W3UWeYavn3stWG668hnpcdZuLMvYBWkEu1ihcb7Zdx8rgqtmuMDSNbtQp3Dod",
  "key3": "4Us2nrqtNXhmdFYpijjmS7kgP8ZK36ykSFafzhBWTfCoD1xWCcaujkMP1geWUtY4kCC3LCBPiPpqponXPwKHXSpf",
  "key4": "4H6p6pCN56Xw7i9Mz5Mf1mhsk3u3NhUQbd2jvxBCiPouom15eMHN52dEN2R2Yn1HNSrVMYhwB1qh56sXMbogLBt7",
  "key5": "h1RCJvY3pRq2eUB3DZYhWM2ERajKy1KEn7idVQ9uLKZwvumsy8BajDfTaV2c9vDuUKJDRumxj5FoHyAtn2hBT3q",
  "key6": "K4WB5La1tiFsC7DLGJvvPbzGsqUrdwcqTXDK21BwFdXxKracDpxN9k4QCuXjzxKgSVb2kLNR6ghE7CrMkqhNzzK",
  "key7": "2A6UpgsFwAvz4miVeMaRMarueLtgL3CDwRP1CbNECwzngEFcHtfoBy6r2WPBTe6RsUsR871VyGF6hAJEVWZ76ZAw",
  "key8": "3uU2PYwRRcuGG9Eh69vjbVjrAxWS5ZZMx2XUh8eVo3zG7mKR22qaR2fCGMK6769F1qggHyWxquRFccbXroLtsViQ",
  "key9": "5ykvD4KvrzWkaxTtWyd2ai2D4BRWiDHbaa2WVNMJsZZL8LWJJJjdnUnbcNHofHUG6RwfesLfMdZHud8Ar6GgHZiA",
  "key10": "2A5TpqdmJMR5zVgtLxBVHWPSSFUpnyQHa4cCiY7MGn2BpUuCx953CZetmkWrRp5SFMptKMXnL9tyjgJna59yi7Cv",
  "key11": "5VdgnEfNSVbnbp3QbKRCg4aLywVDwuoMdhozxBhTRfj8KdLzaz4qsEGrPtnCSNLM4Sh4yKoWKsKUbPggeHa7r1VQ",
  "key12": "5G2eTX8jz91hzJFxLEBdXeWNbQXGufA9y1xqd77Zb8zfoYG5L3hZz2qcHrQ7rp1U5wHzFekfhCMBt7b5Fosx3t7X",
  "key13": "vwqkQn7aEQHHb5CPcH6qx3MRrPteLaDiLguTko3HJXWatimi1YbLZqxVZYRuzXVdi4c8WD6Fq1GYwQPr2DMTSuc",
  "key14": "3fQ3qahENAmphHkbPG6ESQrmTPqykjdTcdDJJZP6n5vmKtxJNFiLiMwGuVGbxr8DWoU5Ts1opZnsgu9W5sGUdiWL",
  "key15": "3SDGvsBqoyL54KpV7W5pEG3fzNRSQwJi9qbKw6T7QadwqvgHWECTvEiANXNUjRENmxWPU5sWjqT1RQKDmrpjhjPs",
  "key16": "3MArgYQzqDSVcaeJ535Dr4hEnhjpyNuz72PpkyqHn4YuNGS8Jt1F4zaW2CT9NV7jrpT26y8FdyvbEyhs2i8K3vXX",
  "key17": "28nUM4gVLMbAxTLsYnbq5LS5LwLGKixszdy2829wuz9XQ1xMUmAuDiPjQGqcqJ1F5t21y1QQdsaFXLwihHQCwa4G",
  "key18": "4Zeuav6XJw6wzyQxP713TRHK97bw3JMyGf4rVxczD2fy2JwNf2UT6aZV43pCM5SA82Sm8djEzs8QyNavhj84CKRE",
  "key19": "5rr8Zpgj2KaawL8fCv77RzvEdzX53TfwG6FFQ7bNvDwyZsCvoZWSCDpoV2uYsnbaWRysbDfDseSp2zhivoqmH4xk",
  "key20": "4jYGYXFpEkqD5LprosgruMWTBsh5fcjibGaFN6sJKav24tLRZNEK1285mW7UbLfDPc55hTGA4gzzAPuhyV7mWFgF",
  "key21": "fM94XLYGkDVfMPjiVYouhUhyqN3o5DoX1FdPEtXDsbo9YTfk2MWszxChXXR4WxvSqbhPjCmQaZzzGMGE45xbFhf",
  "key22": "3ZSZEBmzpujs3oEVcyfGyXm6UDNWmXsJBMEYBPfdaNhcWWBuesW1eVioNHewxN7js76srZMESnobHiUzr55ZdNgq",
  "key23": "jvvE9U7hrVTE4wLMHF3MBXLXyNPRRhMhKiwp53pibPGeCxtbD37BLX1MeDGs2dkqUymkU8ECvSfsc1TqSWjzZRd",
  "key24": "5YAMpRYd85qQhMoyVRLK6CLuWS6dkbxE8ibyeWRHmHA4tUrRdSekwLqbSnNckqwpHTKwNndpfCwk45DRzz7muZJM",
  "key25": "5zzvHx2twWrotBFc1T4HqGonqwSPpkRsy8R8gxayBz5ZXNYi84mA7Zmj9XocStPqAN1vNs1vpitv7fP3KPGKiWvy",
  "key26": "2FAUEtV53vmBrzTtGBsxjGAteH8F2fSqN7xuNHB4XUpvaFakCDkQWrhrwuFXVr7cRGGpcYW5rCf99P4dXeytoKNX",
  "key27": "3KKC7VMLahvJSMnepWgU5S9bMkNMtPrdY6cgwWyMRXBWfAxdTeEketQMBZD68DgZhiTExoR4kS4YvNEER4Wgnxj",
  "key28": "wB1GuBi3DUiZyQL1iupkC2kZPu7gyaGMTQ6tTPnAKsHamSCY5XP4ifvZ7aavw3TFTiVSiP1NMV3BDTXxsr8hWVg",
  "key29": "3n75B86qpD3vuByVqe4BTZ64yNm1RJQTb8bKEtyPRVFHqXa3t3T2WSR1KKPPw4SSpjajzrMnwbuKoc1HSRzPikaF"
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
