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
    "3EGJ9ANpji5cAKrXw9BWFbtJFzCh7VCAKttjFh1eQwiNVjTPj187D3RG2Kdv4N8837mrQsGNLVrQnKAM2LWFZpXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "778WT4Jfd4v4sjtwqZAz9CUZ4nRhB13xVy6RNp4Yu5cqRFYT2tmQAo1VLvLENex8gqdLd9wKTMyitBkrmmPCfxF",
  "key1": "5je6yexvg4uFPzAn7uXmT9gaeNfUVepcRnngZQ3cgsY8J6jXwFhPGu94gMHECev2LVuTCGL223VnW7vC5HVbrwnW",
  "key2": "4oc6SftbnAa8A7U9UQxQqJ1bBHs4MVF5f5ABuoKUnXs7x4BKTzZXGPPNrr946QFXeYGSmLMMzhwrxCpdy4bwMpiY",
  "key3": "2t8uS9bEjJJRDnTgZHzkZe2MxHFV6eyAts1j4QQYrFMpu3WPmNXfWSEyRKrxpMpX7gKYfsApGyrFUphQHzwK1SE2",
  "key4": "5CyyHHqSMGCggR91f5TfVsxQa92fqLaPQMJ5M5TGXtXgmccNybRjQVrWA8gZdSLfGNT4ChutzZBhm4sgoNUKsoLQ",
  "key5": "4aK2dbjeVSf5DSbAmCEYQzMMxigNJqkLxpkyuTB8RwNzHR7LhEnuZBRQ1LU4P4LohTFmmzFws2V8zaq2UtMZ4Gpd",
  "key6": "3vzzHpmFQ2MuPtttDe8UZb61ru7rk7sAiNh8Hgy3MSZJB38dGnFDe42PZP28KT6xdzGszfNdaqeKsJno8PspmenX",
  "key7": "4kHccWGsKPf75H3PSdya5hiCffudzoEzwA8VZ3bxgk1XMJZA4JGvRqeucpbQ6xz7MCRYAapguy9uZeS15Fgx7rmi",
  "key8": "35KffoUyeUx4V2ssTe9wh78F4qxc4WNMxt25JjJQHvQtqTT3GanJa1wHRdzWvZQzYAP87ALCvxqpj7GLFqbTCoBz",
  "key9": "5GWMrcJgToYm93abBdbeESr8Huct8QmwUthTUcu7GdpSXE1adDcDdEpv94rYwPh6u92YWKryPDJ18Gm98B3nHCx2",
  "key10": "P3Mo5Gf5icYEYC8NhY8c5ezSqxoYKTVAB4u7zoGQpaLiinp8fjrfWJ14ihwc6ckzradrg1KtBUPcVbZC9qipstu",
  "key11": "3wLov6nAVXRRZJTpopENhRUZaA2qSmcxDXkLN4v3Wje7fDracpBb7pCGN37xUvzpaeiQSHiLhNfMb4qUqyEoNhc",
  "key12": "58877JpvynoSoehZUxiC9trEXUaAdkRfBXVviDLmkMdMJRHXpcPp8MyjwsrdC4tMwZbJaguSYzhmXWJcfrrb1xqh",
  "key13": "4JY4YF3dJxv7av9DYYusUfzf8yyvqx8Z4MvWapiTkVET2E2foW7waDovdKPUEZeivK1v31xH8WA5fGvSpQ48w15M",
  "key14": "5PWGEYoK1HstkVmT4CSrorEV2Dm7i1HbsE7Dv5zyEN9TosEdynuUzQ4sPvbmGQ87tQ5sRtUu4kCv7BX8aWcN2dUQ",
  "key15": "4jDuzt8hhEtwH7oo9Eqc7rCzqfp2ihDmY81L4TRwErtc17Abvo3YXntVYrUSyL9HGiyVSP7HV4dYjKJCEMKjk8aG",
  "key16": "5swbhQmehLRobNTjEG9yry3vA1UQqG5sMm7s6EWjwhCj19LrvmQwvV4MyyptRCPPs4rqZGvbkL7vMF7ZfFXft8ZW",
  "key17": "2zbzvHXWzqio6yFTjCBB9p8WLTVGFnQBEuisyMVAXnDjeowL5Uw95o4qFEDp517x1ncj9BWdksWUmKGJ84wPNywS",
  "key18": "9rzZX8KtY2D2gKn6hDU1igD6y4YAS7M6vig8hbhLeugZoXAx1V8u5J8DieXAoyTox9GKtQMST1zxbXAzQeSqBFW",
  "key19": "3tnjG9wqR8a8NGTGsGBh83SgmKTK5rtLEEvfRFBh1PCRjUByd2Pq1MxGSGLqHKM9WSgrUsCcDNUMCTTrmVfETeQc",
  "key20": "x5XzXB3bWVjruAAUDdP86NY81avLuoawpgeFKSnsK16F8S4LTTvSekWY6qpScmpSpMNwrCdCP1tRMi681CAUytF",
  "key21": "3VZpwjMgchrjScqikjeS5JmWbpUB8bYbd67HzsT5vEfUS3nwKCVqTL1Gp71GPiqXUdEEcmUo8BGfyf7yMyajFbCi",
  "key22": "noswtdV4VmN6f8tA6ZhETiZ1Lqqp582eNicUL4hWRd8sGG5w1fXDZBbLRn8Cw2c4jZsEM4rakkrhiAqJjq8ztRP",
  "key23": "5vkUCRfWX5WTY3WNFvajZryJpE8aob5tqsqU9a91NYZFUnFL3ZnUikjtAZwHahEvuRb6EJu5JkiSrhssqXDxRu9D",
  "key24": "ic1w5ua2SEyTgYChibS4wT8YmteqbprrYnLdFhSFU1bBH2tpfYuL2q2iRRggypcngsDRvdTtxjVxL9BL8dBJRrD",
  "key25": "2kqVwaGrbgq1VyF4UAK44ohmpXqCt3GvJKEoVLoXWRcZixApsh8VxUSFKhqqUkxwy6qk9ztjgq6xAqpaa7wt5nyj",
  "key26": "2rsZNBperCkuBFBJHwcrv7b83Xx4L4EsDhsQaiucVhSYGJPpU5pc91yDuMzPrqhm2kUpyaGqJH3TGK7wErUeoe2U"
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
