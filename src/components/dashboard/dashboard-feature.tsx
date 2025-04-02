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
    "5kMwMSgcxnzvqfeGQanBhcXWTAC9r2E7bw3dBpfjup1KSTgwC1mf1VN8WtoYMKzhnCeao9PLWaKSmVMGGRZCySrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nPgrUVkXKyUfLtXPFxjLxNm1sLtYGwScfdVPSbbyY5KpVkCi5G2bzQp15BRMTVhMFQhZ1sW89PfJ2h39GFrWxtN",
  "key1": "4UeJUWHgngg48DoRXzmPZCAGUoaM571HAtmymnRrq1HWxZrvzisquyMNKaTzdMbynYCvbWgq4drJyn1bc3RfbrZn",
  "key2": "4P6cEB5AtxUBaW7xRUHnbTX8nbLXwYWmCaEdnmXfGAY9XRan1H46fXcgXoesYoKaAo66qqYLHFjMc9coji7LL8CQ",
  "key3": "EWHN9TBbiBVDdoxDQthXpbDknPsoa9rQT6C7w8SaEBXPGXXgj1pbi8VFcTDLPH1pzskaQCwWehw1TZfTJ9aQdyb",
  "key4": "2tVaVHbEbkAdDPeXmCvi31umBmaoTXTgA7HPXhquXWQ337RZTjUDJFhd7qE8FusRCkA1PhCU5DVkauvEvggXWJCi",
  "key5": "2YdWcsBrnwq5kFEwvX7Sr2sqTHe3RrMHvYLiEJ4vaGtTCBPHfp1hY36Qrm3kVmVgLZqFMMmvSVRi6xFxc8Tr9mmQ",
  "key6": "4B7NpvD3epV6MrfqNhqvGBhKdmwF9BSNiCUd72a8r8Esut296uMGemwY6NW5F6FoMJSuDmE2zRfyx7Jg4S2cxoxc",
  "key7": "5rcyGNTNpLfKc9sarXZUapfDZRGSDNo4LAMe9fXL7mDgnQsXfZt2vPbGfTyp5T1J6Puq9W19o9nQsH9GmNEmNNeN",
  "key8": "5E2ceseMDQdp1K9YHAa9XWzJ2B4BAEPFgnXkD2eQBmUzpp9VBdagUx1rLJza7745gPdeGzr7Gs3JFcqq6hrjFHWc",
  "key9": "9XAkUwEgWNgaLhpKUPafqP6QEhpXTisvowRk6QfKgiqvgJJwESUgtZYS6QbkR8joKmoFwBrNNFpAjzNDPqHspmn",
  "key10": "2aCD4ziVY2vzVkbyy1S96FLNNtAQBWC3LsV21Lybntn9A7uUcAKqSDzxiaAMWrMfD7W7eTNCqrQSM1HsnnnYTLpa",
  "key11": "4DSVHPXuBSAYCC34E8xFoh5vXDQE8pt3bsaW3FeAmD6yjhEnBFFrsgHs7dQeGmEd8o1tdfpAMXiXffZbD1G9RzHy",
  "key12": "2pH2PvoTP72bqdf5zM8Z9w6UNRrQbbHFAbRUJcbUeqyr1S77nAU5XXPsvBSfwPk5szYUsoMshTXKC6fSTPyaVQX6",
  "key13": "4UJKKkvsXJbQV9gvFuBsF4P6yME4mTrdvH7BdXvQheugdQi87NvQprueQfu5uiwFEKu4HR9SvxsatrbkzKYakcVM",
  "key14": "3UxPmTamHb5BqVRouXybSBBeps3cfznSM6q1ewQcMWgw1EEv7fBVP6PXRdWXpBakW681aVueo3e4K4sgxHGNo4js",
  "key15": "3Gybo4AP98qWByXufzmnxoFWgnaoq1u98ZowRfVsP7Bdi228BwWYfFs8bHXGfaUxwJzDx3Sgg2XX3bnAzojbQyev",
  "key16": "5TBC7VZTmjZnDoLqVy6iVTpfqqcZn96wnfUNTHUu7sK2sF2coSnGejhq4sN1ftjaJZjeaYju4k84Vv7LGJDZKhAQ",
  "key17": "Rk1j4GVS195pmA66LQQAPA1mUmD8nCDX8kXGh3P3B8t9Pc7Grnstg3dUnuk4wEgeqTZhD94vo6BVZe3spiPu3qM",
  "key18": "4GDGaycHkmEo4rERFMWXKQBjtk2AvvanRMbLMcSdhj9pUme4UVRPNPRuVVGcVH8G4Ts2JmsAVwL2MzyActXuWmpK",
  "key19": "F7mWFSPgBka6whf49qg4RMgMn99ehhiMbudDPqd2AC7C7VMxy7UfikLKW6WUm1xjR8XzX4bTnCuavoWgb6KhnKZ",
  "key20": "UJrRsVcTrizHUGNkKZ3ZfyrjKc4uRPgHspRotcQzwd4uu1CEXWQPuYB29Nen63Uj1guvoVRDithxxcU53VrLhc2",
  "key21": "5uN1KzZvk2WoxzWJz4aSRfyBqedfimjidMGX7BSGafDSxVCDYEFSnUDtFnJBg9WYe7WMYHt23sus75YbG2TtGjZo",
  "key22": "1hvBTss9UkHFPp5bEANYmm8or8DFKioQuNd5b9jFkbDmfLmuYAcxHwHDqD9zRJKK5Nptj6oxKX5Ry2PwUVNrMNY",
  "key23": "3Gr96T2mRbTHYYBkBcgaD6JhUTfLesfDdz525xjD2bcCQU1EBx8i6F5Uf29dn4TUD5SaKN7QyAi8QHBDTyru2aJd",
  "key24": "5oKKC5LpKozx6Uc7AgNipoEMmDARGjUFwBUgZetxCQgZpvYQ4QPaXrPpdFj7zAh1oU3uhUMaNoNn5WqpaufMgXSQ",
  "key25": "3amxxAMCRmvnk66mro8JxapicmjGtCm2TACW7UAeySppN6jaNxtn9cb5ZTs2qJrC97CsujUAR3gE3yw1JSQskncP",
  "key26": "3Q3vGGxLZUhUSPXqNkx7q1dTGXzQh3XBLPDBd3pkGsG3u1fTVZaSg2qC5byAdNfpYHek5ZopemU4XcGAsMmwPjVp"
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
