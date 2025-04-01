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
    "5C8QbKDgpJse465yuUBHFRW4su27covoBMe7ZHo7vJ1NmA2tHgs8qWaHCEr542CpUQM6N8m3fvazhEzWuBE6cmb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42VytY1eUWgmHrGRByVzZvt9AFVwDMqjTMtK8dhoH2rnWUSV65HndqKWqwq6peyUbimFJGxoDaQFAK2f3ieUnDmW",
  "key1": "56qssqocCYAfHBAph6qF5egh5ELx64ym5aH39kKcbU6qPLFkxa8ScPWe712XnQsUgwmFwudwS4xAXitSqCHJA3a3",
  "key2": "2JcihW8GKecRm4QJe3bhVBw3Mw3Nm6qQWLGeiDEADrysuvdfaSqr4eJBxZrBxEojxGWZmk1vv6ZZDfWUbzK8Qkuy",
  "key3": "5oXLwTQUjpyXqYMz9CRGMzhWCmQQxP1uvUJDN12BpYmmx5Cj65bE8VNkK1cM3Diqnj9NEZDWVpKGuN1UKiMoEPhY",
  "key4": "4JwPqcwxro8rHSfQtpB1B9sANn4pSHY855PsW8DpkzCmv48gg4tX2BBxeWtKous1CNR2e8tAH5iGhahPfpztBEqa",
  "key5": "2eLuaeKfPo4kDSbbXuYLsFrvmyeVBvNJ55GoJ9xqHN39vPbwEpf3w6AZUKifthVmV8BZHgyEFY37rivcwXGG7q53",
  "key6": "6YEp1P4skN425a7rYyYzAvzcKqkzxtcA9uydcwedY4jYgzDMq5crUXEyn2bkjcPZyG7NdP15xHAhc9iXgsR9BxQ",
  "key7": "tgzvbqXus3nfkNDd7bwznaM42KXi5MTZTFD86EpnCsBoPTcriUxGaetvtHkFMqtZRpafBxXW4sXPvdWV8xC3Fxz",
  "key8": "5yPuVpzDYxYtGTuikikvsV3gTKFB3Re768sonRBbSH6AFVqvbKyU7YbqjV8m6jv5DUzfN91ZJwN5CGWRrbgg9ASw",
  "key9": "3yp1H5Heup8xcfgvkc1VhuLnYmEbbKtVPnhRr5hgR3oJHHnyUpuddZKYdMXrT9DGxsMVxptoKGB3n5zkNJu2YHiU",
  "key10": "3T79CBYwKo3VR9sAi7ERSafeqk6Sv4bXRSdTbcdwm6PhJE1AvkKzQt21EjtqqK65fTNqXQfSkhPQrVjNeP8Ga67k",
  "key11": "4B3ETBq2GvpV28tqauTKM4kjvZCMT8t87TbimuAki9VaBf1b95LmEssGLXhecrXDSrBjZFS1iLFXYgAY6W4UDCZ1",
  "key12": "63Z3D5hkeuJfdZdvs3vPug698fibBzVmp77P5oi6pD7LgFurq8ETyvA2pY3HNaqNP6qVYX8gfzRsfSYgTQXzsBMN",
  "key13": "4hPiNuiQq5QkLVeGjmcsZkfvmQgQff5KGUVWUg2NjmCvAGpS27zhdooJcgZ4dfoaYTevTQ4GYX8ZwhGccbPq6rvj",
  "key14": "VQGQEs3xRqPkUMpLEQnMt88d7arxnVYPu1Tj8HBE94gVGvGwnQzqSRcm41sFAMbw2iX6NvpVKNFWqrvX26xWbv6",
  "key15": "3witYVxPX4Em3Nm4h2NGRAqd9tHq2iYTGX9JcfM8HhXq9rsqoBamEVxkpJyPWAyqBRogQQ4zcSu2rykw51hF85aP",
  "key16": "1mUf6u1g5sSjrGhTpczEF8UNT1gFTihdMAhJZEvTVHa6tMkK5sBsKSiSqADRr2JVqRgrSpMemxvNLWAAX8EoX4w",
  "key17": "2SgbVdFL7BK1VMYZbZ3Cy8gKHPivFxD6qzorDEWTn788MeXRQDfbnA7PrRXd8yUv9cp8cznqgHXg1AthZcPXJjJH",
  "key18": "czFVRJe2dym4JDUVA6ebqkN56b7NZCcyQ8qps2gHoAcnYwYVcpwBSd61J8SHEmWE9rc6zV9bDiTnL3Yq1gPpcSc",
  "key19": "42nbR46jrCAnQqzJqTtn5satYSwhajRxnseBhNFDGYGJiSRT86tEmnrCFLMmw7uiM8AXY3DViMhUDq42WK65akJu",
  "key20": "rcP4484AuPqz8jjpyiy2Vh7dSacPqhJ5qMDy2wLpwXN2ug4jcCGQV5DXnyf9eWXSYh3VxB6NCu3N9E3W8guzKvq",
  "key21": "4icg2RX1cXJysyAELyXCULrK4ptetobvmuByUHHNhX17pjYe1tQEw9VMbg6vjPFQnRK7yLbJ1chZsRcuugzwFCim",
  "key22": "iqdWbfzLpsyogddM7usD1jNcSAfiniZ1vCCccRCKMui1nJvYK7vRznu6xiyBQCLovgUGznEWPq2nbzvc74ZPttm",
  "key23": "3izDt2NbpnX7nhWjJPaAyHi3qZ2h7D4qa46HF77pTv2pzc1MQJusskzZoifbFWgxYP1BJoHgZrztobBeS34132t8",
  "key24": "5QgvqHuh89v3rjeGJXfq22Zrs9UJi525hukHS5mtE7G1aiHF4UXDB2fF8X3q7gxYZtghwnn5wzqcVu3Qh4FWzbfY",
  "key25": "3CX45vUsasucQfWg2KnMuq29ee7uYC5QXg6aGhcEMhPc8X7RFHXtoUJ5h9c9NR5uFkp4ddVuhkMXVXT3NwVm6hXu",
  "key26": "5f21JT1zaKf3WVtzrej8CANSDLAn2JsGQmuAvm8puJ2xWYNocKmJejE93g2k3CNera44WgwtDPDgLBbZCEuE5ktg",
  "key27": "iZS44AvsbYFiJScxgzHeFn8dQRjRZceyWahXLvrhpgD7zvy65qA4XHtEYUgDPBh69ph7Yw5RBHVD4CNQXViCiKj",
  "key28": "51TbM19ncR8NQjm3wSB13C8Sf7ZExqjpmPSdLLU3bxTjTGbNZM7wH4xDr5sC9E6c6PLKYX7rua1RTomy55eSZPqW",
  "key29": "2wD1XcdgRNWHzwJHsPxnP7MUHweBu4ZV7Caag6DgUUysET7PKbzezHVWRJyS4P8NGbbMyjnCP3uWTJp9UFJzhnqE",
  "key30": "tdhUK6UuExU6RgTAD6vx3bVwn3KR1yvUHH9DMNKGJ43924aUwT2cZNxPUqgwyLGAEnPaWXcPPpPYjvfeQttA16Y",
  "key31": "4Qwm6mzrY7o8LDby1jdw9dmYHmd6kWDKSZp7PzotK4nob6EaoDAEDzjf6qVFNRjyEyG1qDDbpBVcSof5bTApkqTR",
  "key32": "3EnrNhqhhuV434wwm3bUm9S9dW7t3iCj7Q8uHz5Ws5PszXvh17ErJNPSYt4gXEnBrN4JcqHwUFuN96N9JfsLx8Ve",
  "key33": "2qdxgaBVx6skj8aDv8fZJHeVtetNtyGMAP6DxZT8gJcktiUQPb2xCCVgk7yXt5JfqdVZJNYgsMpaEhvz39Dj4Xn3",
  "key34": "2Fyi5e5PDKdPzsSCxqtvHr2AEuSAx9mRweoGsMkFubt1K7mXbDkVjviQcp2PjWRLz9v7TkEujdEBDZGYN4pKuJsf",
  "key35": "5JDvzFzV8PdjQy4Wm4f9dPAbUNZcaVNUNuZUkLyoBUGyV4s6KZyZjK4L4tzSHNR61ivnNirDBSAS2ajmd4QoZ187",
  "key36": "DttgUmbYKxgKWpE3UNwodrxUVt7NRGs17dKX6R6D52RxAtc44RP1NAQt7RbY3We4UyZ51qh4k57NCqnkuiSSqAV",
  "key37": "4wZ2rbw7v1gRiU4Mxo4tbCYAXdkkCTuXzViUERh1GAYEVK2E8fXqFN9DZdkYfcKZinEY9krUqHjCEKSMXmxy3PsM",
  "key38": "5b8fXCQTGEMtyA58huyekVAVzuAmbkTJC7QiafDcxCZURQi8XU3AvUQ2Y57nHK8SM2kEtxxjwkL5tT4Xsr1VWkjc",
  "key39": "2rc5mVm4tRqkfTUqgynuyTMqQDvmPFYNGAuqD94bQSArEdJevEUbCYP1zY4Yk21VnzZSbtUCF3E5jp8DQsFUvTPq",
  "key40": "2PeD74Mas1pmXZc3gjxTGSRLkwUDriC7RStye9nMYJwCdRqKSzUKiX8PWHQxVXos9t5LR4hDbfjLGFwa2MVT74Lj",
  "key41": "kivwXaEmb38EtkyH9STZgWaeP74dzTUxJD1frdQHC63LqNKcqzmqWErrGafJLw2S34VdhSuVCgtbo9q1WjxKsvC",
  "key42": "3LHQY3eD1TD4pRo1gZJg8Vv9L8MU4dL7wuyAFRWPLsq525bgq47FunyL8mb5yor8Qk1zYE3FmT7MDRBQoDpHMQEa"
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
