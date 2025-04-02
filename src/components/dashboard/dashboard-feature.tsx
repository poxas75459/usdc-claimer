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
    "4gj3BYCMNJmUv528cmjM72otu7Q7tx7J4XznwmSRRQchCPfQHa5iyXWcXWwSWVYhZXDr1cB1TyqG8RFbwAFsD5Zc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "npkM6TZuLTLgtTH3mMfx8oJ3NPd6Kpp4AJR6Eno22y1HZcHpZpDBxBnRWsHLyUEkrmmEARua3cXzXyBrjyE9Mmb",
  "key1": "63VQMJHeaHmEx7cu5m8qNPL34qfCo4po7yFoTjcsn3V689kWCGmiC57TjSeNFJngEArDQEMKvQMqwJLD6JVhLSMs",
  "key2": "2B4HtP8ApRz8Giqgv4t9feALacUZCYHfZgU7BAuT4r9VSAmPxaNqeEosjCz5HY2HUK21MAJRWMTWMTVcpiKajNLh",
  "key3": "5spUcCitzvP9bYLyrX7Mv5TdjjbYgcWs8mgCXXb35zmNbXD3YAn6ysxUnrGAzJM2b6kQNZr8j5WhS1iC3Aj6nLup",
  "key4": "TkgHEKHoCyHU57j3mw18qeZZpM8JpPiwJwgHXNeeMaVWwePpZTjFMBDo6BMTjzCWXqHdsGA85TsLDDQJPGQCSMG",
  "key5": "4wYhSe5Cythfv67zjcJp5N9GNH2rfKAHzSMd5ZVL7n3K6rjbqLQMB8iSY1SjHEgF9fNTS417Ub8XtRha264J8HmT",
  "key6": "dYGRCXrjXymgg1DrJeuM8xibVsW2kX8EHW8EDR8SQcD71YGJDAXHHJ9gYcSgCnXiiHnzvv1fJPj5LGax2mkJtRV",
  "key7": "CXpHcKEfZZ1hgU6os667QgxrTYUMbkxKCyxrhoQcsYjjwUjZ79Fne7TWMU3xuJS5ZMH1Zx7QNxcEghhAb5JJTfg",
  "key8": "3DuzE9MHgChSnA8Dgdefme86KkbPGYfvz17qbyJiGbaxXGBZMpNMx1ZAkSJ2iUAMskfq1v3EzW2DfGFPnvtWJnr3",
  "key9": "5S7dY2uD8Nt8oqSnwcvnKRg2Y7TWVBWyeSiufGksB8wJ76ToZxtaVBtuiryLUmsXnKS4EE3Sun3GW9uxHXDDS1kN",
  "key10": "6YZpumZ1tbCcHk9c5a3mWKfw6VNZnxU93LtPekJy7A37Ani6mwCq5S8ngJKR7CsxdXEfqYopdXJEJHwVGXMDgEF",
  "key11": "2B7d2VX5wCFkS3uAcbQbx1eHRFVrAuXDHfABC9QHrKymdx62o6iAx2hXU8EJrEJYi37gNFvLjVouf1McGky8ZvCu",
  "key12": "KRoaKAiZuWTYZAW58sSiFuJtDGyWADZZG8fWKy3cs7zj1a9QVBftm4aM9wHupd9UYm1Lrocq7JKeEaHqpJfHTKV",
  "key13": "1MY5GaE2jTDSAFY6d3MTAFPFfueKYoH3f6THdKiUh5pDqpdS5ZU92cY1zDG2HfBMxJLqMHQ78FKTp6V5eksf4bR",
  "key14": "5VKLHUoGekGeNcToQJm1cLk4KM4Xr1xaD2qooRANjDbqKYTibatfSdkfR4FnXpkkipzLy95sJr9igVn4RjskQd6L",
  "key15": "3dFBZAemSonQWXsr3iQrwhtNVYzybZPmj7sZDUmHMcRP4mJtVepwh9QaAgt1mfESiP2RX7g99TJNMWoPotxYtBwq",
  "key16": "5XKUVGTJZMmvsFs476a5wVRGpykJefybP1Fz1ph7CuDoyzGK95sd8pCS4Fdwb3BnSf6i9WhgAtaZPRpQKdHHB7gz",
  "key17": "2CzQ2vaqHpdkJ9tukpUgDrB7osZzGRB7ENpNq5BQiNEHfutCcU3WsujtSqfDeecFuCEZXAWk8iWp4riCnBA77FEi",
  "key18": "5qPrmixa8Bc4P21yGNN6ywWywQPw33Exp1cNfPE8V7LG2hPbfWF7RuCidxA77fwFVtcYCDaQCR9zDM3aiMEwP7ey",
  "key19": "27oXkDHPYhfobfXxAr9bNHFQDfk2EouZaH7qmW2FQJE9e2L85icLM9MfxsCNpCMKjKiAMDq1SdRTjLJ49YqrbC2G",
  "key20": "33Z1KtEZJ9RotfEDjq9zxCxSpRNDANSxU6TE3nV1JAFXZUAoEqH4dswqHRWRMrbi5N4Hhd2cQLgLUwbQsB3bQfRE",
  "key21": "3YZtun5KZ3d42cJiohQbFoEUMcqjme6esCZt1eesCWP3QateCFZNVf5cXFxZmGpkDZLu3eoUFzm6VUBju5HvkHfC",
  "key22": "EnRiD9rNKZkeNQaWibtvqa881LVMYvFUdFXYmVo7Tki85MWMsE1H5VC6yBEcFHj1doUdrQ862ab3j47DwppofxY",
  "key23": "wBC5AH49Fq4qakUCQof5WYwbhZhxu3vkCQgsomsgJDNiDLSTR9kEdAUmZgLq3GeWe6iM61DebEtbAKL9Px8Fe7m",
  "key24": "5ejpivQ8FW2yXQ2tzpqfqH1KsU4AVFQmL3tfehkNGH2ozmQXFSQcYw2w8FngoiBfHiLXSd5pKq8zNx4TeQGa3Lb9",
  "key25": "NYgynwLHbnENn314McDZvLddE1ZaynDYUHLQw7m8WqviZNziHu8MbYkSVWtDe2NuLwgHr15ADgByDRtpHdP2oYA"
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
