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
    "H2o58UjcXgw9VpRH8Svf9GsKgELgVZ1ZpzmKptKcGTA1SijvzxxBrNFRtm3UpUdd2zpz98FzVsrUhN7j4PejGUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zJ6hw8sWDhgrTbvaJbfdzWZ1AJe4WBqQzZ9y9AoZkHAbh3ZYqaCtgdLjQXNM85EFdiMU5GQcdKv5ccGgvD2SEo5",
  "key1": "2tzThiFABUX7XfQDM5SHdMg89hUbnRn2MiGActRZFpVbKBe4J64NfnVTeBdaWAc19uAQvUgk2hBiFig4R6WJmQmc",
  "key2": "56C4TMJ2RCuk9uvXQ25zWcs6c9euegSpaXN28DoL1H8L4MB9MzeMQHfAFtxu67pPbD2rHRVDP2NcCNDWJWRyvn3j",
  "key3": "32vNgwnGtwboGFLpeeWy8Bptrk43FNLUG5bXezCyHYLmaMeRszNNvWmBo1ywpYD4KiamfydMUBE9sghyPWvA8hf6",
  "key4": "4ZPuXBRnd1h9AWm4Ru8ta1qqihDK7QDpSGXoJQNx1H5VeRz2TUT5zNuPehycQ5At1ffSETtmndBeNQLTY4TWqWgd",
  "key5": "3i1oh8fu7hTyNZFEGRqyBkKNdEfsZxgkobqwTF6ViEYVTSXgs2zFEGeifyfMYZZEXdQSfZy1y42E1fPk2webm7Cm",
  "key6": "5XHFgWYxk4QYo5ZfCsEzeQeFt7Gco3EKCeQQducmRUcnd2ouNaX4J9a5wfmeKYFGhUkQ4chBYufKJ5icHDwnBQvC",
  "key7": "3Y5wRj2k4uqmjxHxPgt33xidycGC2hxHo8MCXauxBABi9nw9kRpJ6tyrkrU3Ym3RmfEB3W1XNxpRckifDKJVtryK",
  "key8": "5Jv4UmdRfsMD9wJPpe7dQbGf3GM6UciFCQzoYyvMwjPxVmbu8eQkbNtUosQpYqBspaxyeuHYrhHY1B9HHQ7xVff6",
  "key9": "4rvbxaDjhm7J6ifDSvwMgsFd1kDTZTwxmyCBh1XVUYw41K21fT36nmW98KKc1CZH5SsA2fEmjZJXAw2WhJciKyoa",
  "key10": "4zAMDSrgEhrhmSVV4QfuQ9BBjmxYyA6Fj4z5CfWzKYz8VimuZPsGJrF5k8dexnu6ayVqxftCv359NReBPGcy8cfQ",
  "key11": "8T3vpfRMYadGgJSoXrZXyvJNYMS7H5gN8fbXuBhrSEzncWDYTjd9d5qsqj75y4R8YGL8tDQusZr1Z9FAgWWrHWU",
  "key12": "2L895eTjkcQMabCHKCvFRYJ3FDtmp4kxLrdeUv7nk79vBdMowWLth2exGWtCH7AWLQUDynyWH1WGLJVja1BfUT1d",
  "key13": "4yJrpjWHDor4TQc7YgXYU9BL1NQRgZwTvrDmb6DxigwNBxmCYPpeH2RY4yZxiCkKHbmq4w56NvRqhkGiMTgNBad3",
  "key14": "28dnyCT7fHVLNFufSeb8whp3Pk6ujVNCjTXR1jSzNVcNCRiEZszxJrGbjVg74CNZa8Ew1Y2LTnud2LKwJ78haJTA",
  "key15": "rXnJtA9bPG3qAEyT5dhYTwjnz1wqcmFoSX2kPiY74UBVYk2agguTcKQZ3xdpifqbzLSKMXGq9XrnrC7QozXzVFg",
  "key16": "4PXkKQLTpVSxcYiL2XC52akLqXHcc3n6CasaqARJ6ri13KgywGnLUZXwKPZFqvGVDMEfXKMTXQM1jo3wBV7FU1R1",
  "key17": "3rYDAwhX4t1QPw56shCN2TehRit5H49M1ZppeeR9RCuwEiaMTPspiFyxmMjrpcQveLqSUwheC6xPvp3FytZXMBQQ",
  "key18": "43Nae35DVMqmhm7sQuq4XQ3Y1Sv1F4Pe45WBa9XGxB5oTT3MHhhepvuHXRLWJYHamHxAM8Gp3dzNhLnqG7akQsxS",
  "key19": "3Hbx1EjfHPfDRozramd62wQLx2GNg9XhuNeVtEvYeQJ5pvTVVjmbteEP1BrurfCCZvgbxfm3Ewm3vxZW9ETU8Fh7",
  "key20": "3W2iw1ifLnFLwGc6gk8odKP8zohZpnY6FSkTpprmP2xpLBGdSjeRe3YxL7o1v3D4xgBCWcfYmGxHc4wJ7DVaBPN",
  "key21": "4F1gKUsDhgJgs35fnvUEju7HtpZNDayFvpCdPNTGMgNcxgnHdrRVGRNZEfRbhJUj6cWk3hhJiY39ZzbEN7KpKxVM",
  "key22": "49ndGMhLDSZ9EZ5Rb2wTtSjaTiD7hiXgArZEDSYoWadWonXSZHJ8AcTQo2TniaMoicDunAhYnzXx7Nd5TikjzGEE",
  "key23": "5uh6U7dP4CQLiKDiVsiD2e4FQA9YYHjPUp6DCNsKvywzNuX6sE71ZET4Dh3e8NcrktcttQBSYemVSRbVie9zFLGf",
  "key24": "2vYwPPRRWymxyVuL4DDQv3yVDiWN1e2tAjfJQ2gp53WJjrZR3mVJREDVhaZjYRht4etCSaEvBSFW19TqxCrwW6BX",
  "key25": "5cjuJafyvUxmKkNEg8Pu9PzwcnxKqafTS3aKvLwu8se6PXQbGrAS9Me1WnKHYG7Y6rJ4etYixjtoEoUTtQVTNY3F",
  "key26": "3Mf5STG4Dba93o9G9aCqKJimRobEfRxzkBC5xErYKXSMWSUmBx1oH2kSciApg6p93JKMaL7DE7PMKjppXHiPteUo",
  "key27": "4LmQ7t8KAQheTuPTtM2LTNWFAy5e3qVZ5n9P7FPupF4ckxujP7rJ8SB8ceJSWpAgVWpPa3k77QWuWSAyPtj3uxi9",
  "key28": "4xjbHd6Zxwqpbush5QVtf6Zn1U1b36AHDLkiFBwJHYV8BZXPdGqEzcoqJgnXAN1vwfbqAyR4vBCaPV6Sp5dBqBrS",
  "key29": "63Rme6dgxZYe9UUv35LxUx8wFhuaggZLuujvrHgti9AexLs6rsbBXnUpNytoBDnH77y1ZgnGd6PDsceu1fD53Vgt",
  "key30": "4YDGuywUUmrpdqw2tZxaZZawEWSysPGWzbHBNyCFBJzLXnMK69wYj1DL8Js6hBGAcUGGKvpex1L3MxyUSA8oMxuF",
  "key31": "2rZEQVbVWei6epeCUoay1CyafobmTWtxpQAdTVkSiSrMbYFeMYti29hvS97rtzfhLAAyGogruohEJDbmvG7qt6F4"
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
