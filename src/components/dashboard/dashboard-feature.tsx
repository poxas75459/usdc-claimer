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
    "3jaSa2Z7kSWqZqPWaWVveFvhP5gHEm7mgmVjD3TVjXg5Zin3Lipn5SAK23Ar7sTkgH69MSeaQLu5isdTP7kak3df"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V7f59mMf9mtwPaXiqUdqLRQn6qAyunwyvTs7ajvMq3x6WavG6Cqa8hhMgbYgLYD3Vyn7npWfHZtTbSnN4vUuDDL",
  "key1": "39qu2u9aE1taaPrEbNJ16prYycjeQQm1vAYPztQzFHMgUmTYrbyJsL97SvqLoU8Pcpp6jzDF1VoisAd6aMAvZTHi",
  "key2": "5Gvi8xFaEPeyvLL3aysowgBQXJgagjtb4FekGPi5hSajej9e9nbRQovxzmUELr6LkWn6CdZqm5hwjWnAqHFK6xbo",
  "key3": "4MKMtqiyf2UcwA23n7TCNvKKNTBnoLarX5JU4V7ZW2kRrAdaRQg8KqpXoRBhXHo4dZkC5JU86UNKr8nELXqCq1Um",
  "key4": "5138x25XFj5AEVCoXwstToxWgYk4QPqNA6FzDdW9HWTu6Hz4Yda1ZLn4Gd1dNyC9iiMKXRa1JHcbKbhxVfWcgZk4",
  "key5": "4hePi9uczWMtUW6eeqBZcCxAJk6Nk7DYx3vTBNsYX8LixgbypLnJTZFLRSUuSRP66uaEiqqzDr296CjZ8ty9GS5x",
  "key6": "3xoCpX7rzZg96fzQSMJNMWWpMmx3ff2UnoXBWPmDMvncxVbT2NghxfNQf33RTdTHWRaUBuenKJHJ43fnwJAXiE1G",
  "key7": "58M8Yr8zHaDnMwqyje2TtUFHRWDHYGutCPXSDrN83zim4oPHogtfS1Fa6vESVwmaXhoRFCXss4SYsxuD9Uuh9tz8",
  "key8": "4wdkuTLo4TDM7bSK82XWWZHgUWV1jhf9FvEa4DPprvhxzSdBA3D9Am7NpL2CPTP4phLHKdDNnxYi8BaArv1ctxkA",
  "key9": "hB5RYu2bbD4U8vWwooCbQHz35b51Rv4qqbhToctrn3fydvtLehwXacdQcxaiMtjk8MGquHRksqjvyHMZJavopF9",
  "key10": "4pGUBkkCiFXNyvmUx5MYrbJEUHNeJ3ZQApWnX5dKEJedpdUHyAV898Uykk8n1uVoEkRvo1vrRX3Dw6zhgv3V9b4h",
  "key11": "3X7wxfUFmC4k56yULDbXqa9TKLTQDoSs4aLNXh1GSbtqbq6eiGTBQfcEjH6eSMM3mWpt7mW5zEUzdWMwvQsvK2cM",
  "key12": "2fY5tLA1Dh6ppUPwFcTDDt71AcBhJih16BqnecrLaxtruCEKGE5nae8zPedcQX3iZTo24qFBHozWaVbVx9UUZqZx",
  "key13": "2kQrzSe6mHGNtdAmNLPVK9HY4DfbS69nKzofzaaDAbQeC8T7gRdaAKZiua4oZ5CikznFz66FfotKr6hKMpLzzztW",
  "key14": "4Hc7LtypeXMDnMfXA1S9mQXTvpnCMovR5tkuVTvNt6jJgL48GsVvywCwsTNDxohok2uU25XXee8Ty5Sr5NDFdarv",
  "key15": "2J6H4ZhcGyiLb6ZXp7MSaXSEh3sn1MeHUmGiyzC7GcqneR6hpwZrMjGg9hepCAoiL9mJUuB4EEucVCpyBe2Z6qXN",
  "key16": "3y5zff3Xt2vZDXmXDHMQytJXm3ggL8WJgshbCPhjAYwaCE8hfSimDvgQziu2bfeiycNC9uhQ4dQzVdf6b2YSY8S5",
  "key17": "5fE7VVkrPs5E2SYbtmsbpxKhu26aUJWkwcKNgeLcr48AFuYjL9LZUtrRogBLSQZd7ECAfgd37URwwgiXWVDRJUW2",
  "key18": "2HZQ4tEJfkgczsBRQJ24kmhK1ixmTenfBk6qSsLnsw6yHCtbVGqzknNQUtrVReSUjxDbNgxKFPLiaMT3v27fM34f",
  "key19": "3EdaEss8XKeEJek8gxiDKasfhSps7pfQG9sz1oKnjw1TRbNkj5racs3eGDimNXLBkevpP8JZGxnf6ABYVoviipBB",
  "key20": "TTgVqGN3CZvx3EVqZBN41te9ybPvGWi4gXfhivj25HPdgqmumkCbAsko4Z1PDKtehCF9BSTzDT8tdZGCzaDRKej",
  "key21": "3WkM1ExTpPH4obvRMXEYV9oEwpuGdNaVzGhy4Rk8jWXQxzU9oT3NAy83HfesCFKhFm6uz7HDXDAxecqG3SoxFg2j",
  "key22": "2LUsniTtZ8yf6KPqDntevyjAiWuRF1uKQ9UnkuwomF8pPMpMxV2WDxxJXoURSsAbAgvr3TYF5XzyMVrEmWqw5ZnU",
  "key23": "394pDro9B3ypnG1FVMSUjiZLuwZqhZvtKZK9WLhrqmRSuHgAQCR32Eero2vaNedVvvLsA8ppiBxYrzZc7dudzkrQ",
  "key24": "zXTjvjUPC8PeR82XoWRyyCUzhMo8ps1DN1XnAmCFjxkEDKq8WhD6FGCL2gsZ1D7AEHeJafWPaLs2FCcUTBcGVtd",
  "key25": "4uzZE6Jj1uNKxPU8twzcLivP4VnHPaELoSr7Ztqd7nijyyt8SMBD2oFnr7tUhiTcX2WK47UqSZuvC5TCWu1bwjdU",
  "key26": "3PRSgqvwhpq3f34hQBbxZmkSpQmPA78Jqg8XeXipUZFcdstzr2DexKFdX5QPxjDemoeQ6gFmUiREeM12ZC3N8BoJ",
  "key27": "4uJBK8cdsyLCwpNJ1ZEoPXFvkKiymLA9qq224MdiAwVCmSHuVGopQmNJhmWVqJLYvuo6FF8ZuXEY7zFB8ocKE3aB",
  "key28": "4bH845XsBHpVikdwgw8cpaNKJo5K492n1mJPfEcHUDrLa64GhabEZ4ENLYeY6NSBfo44D3VyArJSzhDj36tFjbZ6",
  "key29": "5zKBGsutgapVKNHBBGU7trtGYHwapVsy1MvuiL6Wg9MR1cnmQEo2Ltof3UBMGf544xGpaq7ovANYQLJecWL94GUU",
  "key30": "MdsystY3YVsbZH1b7WHV7WGhJno7qKAMRCLQkozyXY4rDjdUf9HpSmR47o2T9CcJQN27Roy8waS4RVk2pus6gfT",
  "key31": "3QyLPTWgqNmqrGrzEMdJgvXmLPYwRWwV58t1QJZXwBYJdPNB5hYqo6tkAfvy5yB3i6xBhUsVPSBdqaW3js1NMXQM",
  "key32": "5zRXGM12hz6qZ9DeYbEoreNi5E2gebnCv76sWQwi9PFNeas9ss6kYxtroDrdV5AWkL4s9NUvFgtH4bsVZUwkdFGa"
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
