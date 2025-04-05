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
    "4CrYkycQAjtqS67GAhMwfMk1A7mGqYCtd17B7MHXjv9DUubj5tziHZjdb8PBDtB9YWMj5k1F1bUCNmTRWN9GNkoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vq31qzP3WoU1pJxkv8fv8wCutsTRrvsYSmH27m73XKe23yR56RknKPnEX7ip73BTF3qNJH7PePKYKFRREQ1d73e",
  "key1": "3ozX8bexgE64qMRmNQEsAPEAn2xQZ15jeNNTyMdBgEwjVR9m48gYsEVyDv9MSx9i87Z1qddCC5Um36QwjdYTg4Ne",
  "key2": "5wfcepuubwU4ycjDr7XTk8ekwPeGjBfXrVbY9J86FeN1hdX7YNy1jFTBTySGJp44aiM5iPCdX852XzomzTeoBqy2",
  "key3": "vxrMX8FUZWG24zJfFbiaxv1gxCM6Q8omCnJNgRTGjDUAJztNC5sgtAnAtVQ2jFevSmfx6WDLHanD5PAN26rrKky",
  "key4": "27UvByUw9NBs5qd2xWNsmwwqjqjKL5nBdLdP2BdTumrHQJtnJtX8fGNS76AZrKoC29X4TzyAR9KoVzr7Hw7FAjoz",
  "key5": "63XYDvgZLiS3nTjpxc2PxRopzshsu3GFqKcjy93hjNyUXBmm6GQiGUvpRgs6DP8KYJThdJb2GDLnMSUY6Y9TsSvr",
  "key6": "3BsZKapCFce7KKHCZRaPSQiYMuD6uG3xRJnC7dhj1ZcFapSUXV4KcjD1PWRKCN7UBQs3cuRy44SCokNz5KHzsrJp",
  "key7": "2RaTwneFsW22ga4ZRvWmmMyxApAh9DocVmGmQFQfToZ1JBVkRNRUBamY4HmeiAEDiAejj3Hgah72w7Qw2VkKdS8Q",
  "key8": "2UEoSCZWAHtyMBLKjJx16MxW5Hgq7pEwBkXV6hMfnGe5mFXFqkVnJAPFbt2LBHS5ZrCBotPDUg6PieEsL6wwvsSX",
  "key9": "2aKQtuTeMCaZ9k5N9gmvc8Aw5pSegwVt9o3h9GARfvRTaD5jmHYuf8N2XQsthafG45osvoiGUAMgTyW2BuKPQWwp",
  "key10": "2konb4pJsGZzwnQ6BoEENnZKV21PDiHfLXS9SYP3Vix9p5e3NXhTeijJ6pfJ8Z7aT292En1Dbm1snW4ps9BKguTy",
  "key11": "4THdGRVWJfJisFxEZ42VbZayESQ38HrXGkj5SXwvJs4nbDcrdFrfTZrHrpCpGGfConNq2EsQiaVrDiKe4VnHCTAn",
  "key12": "3g8rVEQNdDL4rvztcMMm1X7N6816EcscL2jkU41FxUiKgFShbmUAE8X5dQCZrMtMdkggFYZZTfeYTXJRboH16QKz",
  "key13": "3EPFqEkcUFCXMrNzAgzQ147xBfWENNc7CqUAoJeaFXipqgi6xdE1iQX6UmyMzYwJ71wWDbR1u5VrdvHS4xjtkjQc",
  "key14": "wUHRm9jvposisjAzvJt3GX3EfRCKXYoHcxnER8KaJ9vydWVE8XxaUv69niqpjQCqKNY3EiGeM314nnH5b4Rky22",
  "key15": "mg29RBbp94dzdit5wT2kc9VxJPUv1NGD8JHNcpuJbY7DSLH2UbgQjm95zaf1GWDepud4eoLhcpJAdXi13cUsg53",
  "key16": "39WNHs52cvuRffT9CSuwL2BNWtQRZf197u49Xb966AaH4x65mKNW2trzULNTUdhdizaj8dVxvNmKwf6kBWM58BYa",
  "key17": "3FD8PF9eeuHb7B8EyxXVBFeU7UsP4TZrUbLHKcHs3xJW2EsUQPKJrqhMotn3RFvesnsSyrsrNrvd7jqCSU5Mx8MA",
  "key18": "4QVvFo86TbPuJkMUqs9C3qvSow9SBQDpbC9BdZu65PA5F4B1GZPfeZfYCQCNuDVxtV74iYiqPwkdJG2kDwpDMfpK",
  "key19": "ss7fd88WKhNc8BWi4JP2GB8CCCiVGarHjBEf7RF8fJ8CLiZ4yQf5nNJKPVD9AAnk8KUxKMMNpTavLmNB8ncoynK",
  "key20": "27Z4ysFZjP1PeVAmU276sLqSJY1oxeyitV5DWVajjLdcytBGK2i6QnHNxtdW6nhWhDZb1zVdnBTfpMFippQKNBYy",
  "key21": "3QeXyPzFF3HENviKc5mV5uyY9UpunTPU41jNa4kNgRFTj6MwD4iBJnhJM7UfqMrA4XCtGV84Letx9zTpMJTB8mxQ",
  "key22": "S3X34XbgdFnYzTC3deMZikyxGBPExsJ2Apx4GFUF2pj2JRmMjjGhHaUTvhJAPYLxDD8EPjsAawwJk7Sp9RWcVbk",
  "key23": "5TnESQHQmvRiSm2w3EEvqxZ6EmPExow1utpHq1bkjYGoodG8Y191YM5aPyDQHrQbtUwGAgYsK1EFT8oSK9k1Vzga",
  "key24": "ZoJLaFKDKFDQXsAsbFLQQkCzd8wKHCcQfYBe14fjtkhH8qNkYdWRpHZGdMnJ7LhPkJqsuavX61GUMZhCv4whu5T",
  "key25": "5iEx9wwgP6DQUgcBqBjaAGJC9eJi5N5Nrdmo7JCXvmj4a3mPcJUdh4gNFbhMbzULDBGZgthenWyHa2efQJWbrMbV",
  "key26": "2qWokPGrTJ7pnop4zkxpzP8FL1R5yy7Bwg6CzyhjA3GYTyvehY138wx6oGhpXm4Dbg7p1HUb9AdCpmySNGZ6HXwG",
  "key27": "BXNyQqrSGz12Wk2jFFjzuTZXZ5ajtdtyqy9K9NNyr2nYegniJkwDF1NGY8s84mfg5fZ14Ev4iDnPHBawc1SSoiV",
  "key28": "2VvJSKSPMiQyhRyMbvP6RYKHkpa1FTZyVTqMehp16VXZ1v8rQf3JV8X2AWNZNMz54mjqbAsDaQaB79Qap4DgeNPe",
  "key29": "25H3UhszyXjNvR93FDUAkF2mKhg7BcMMWYhJeY78xLinN79GuSVNv3ojo3hLLF7ULVdGvHZrBmipQmmCyDFgshfz",
  "key30": "2pWPGS9DV8YNMR6E5DDfeg1yNxekrsfnYRRtqmXaRVRzgmHgXbyoycLao9qdHAs7Y9qhiy8mFUQscTRDKovyR12t",
  "key31": "57ucQvAacHzTxPNauvroaEZD5GPZuvLMtHmeykPNPKRrguaE7cCMMscdHq3R4v6dRcJLZ7CGgy5pDSHB92NvJgmY",
  "key32": "4vMvdRt6XQv67DiYzNFLLxVvouUJgSRXNEfgvDAtQkMwGQCkdgaZpNmy6VS8fYhE8rEowqhhFE2W7VRbdPAfhu2Z",
  "key33": "rKpLVbiWgSZbYvKZfpAboEfJxcX4kuZsLAAqzdGPyaSrxVcaUgcUpsLNVt2s853A1wwBomM2pn4f9SxarMgPam2",
  "key34": "2BN7vrz3Ej9Y68PhRHoGR885WMkHDFpsiTy9dJ4eN9M4TAnYKuQoeEYSo1jmh1tCHDHFGNGpS6bKpjnZzfuNVNJU",
  "key35": "SuVzh1s656AeWFhX3hgfXSP5UJqdge1wQ94xTQxAQdLsyPsrJcpF5ev4icmdE3rXheXvWxm9DFrZVfy9Qk7nndF",
  "key36": "3dGqa2HPdVhuMfzjMiwzV3ezLrZyLqXApvcEwZZiXwJxiGETLkeGqGmckXcTLK6TPSxCddiiDttmHAENqM4X2B7v",
  "key37": "4MAM1TwtFzf6hhchpFRuS4f4JRu6eEjU5htGjD1SkJLNWyrGn1xopWZgcJ58ypyfq5oX5N2xx78a6E8om1zXj3bY",
  "key38": "35xTG5MkRcaMurC5cTLvmrtbtBK5e2TzemtZKes2BUA9TLfir1CoPoYov2PdgkgGMPrNehH4m35SkJrVmodWXfba",
  "key39": "3pYKEwVpe2hfhAXzyLbEtU3PfZNewikA3Tg8c4hcZf8shRunFwVM8J4byf3cxqZF7z6VTqSS7fxuAmfRDLKvhKMK",
  "key40": "4oaaVznwQ3p1TAbmTF7h3eg1mCH9f9rDnjdk9JfzGhHyzvmAU5ipWPAjc4FARYaotg1NDtQBTUvX6EMgpHvCsqpd",
  "key41": "wzHA1LeykmZuYfncFhHzS1xNXPi9BMXY9JcrirTVhEYFxPZ7AT6xmRvERHrjNosrZX5nFcUqB1wa479SH2Q5gYv",
  "key42": "4ag8DHhcBceGBKtmJtxJUhaXTxQmZNtxqEmgk2ifBb1RiZLfqYeEV1yFkSrbtnRy46AVGS32cxVVSZ4k5bTxA7bJ"
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
