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
    "3GC7cupt5fMpDnVvPMhsQKg34ugJkZF84NFv3f2WrEUhz6mxLU3CAbe7z2tHFKAVL2M7zqk7whTWW8BZej6zrpjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KgJoDi1BhMa5h5mfQTUyvBTi7zbcaxfvnyp6JnL7ZwsmtZ1jcuZtn3wT3RmcV14Kt3TSioWq1QD7qoDi8g7ndN",
  "key1": "4RuXZv7Q9qcGjQqj1Ag8rwZhc4wJ7ur1GznotdDdfUVvgWh5SwfeuLRytbfGGPsqNLD98GFAEiXvnXBvjY1metoQ",
  "key2": "yK13CyXpZMaas6qcdNep2GY5AyD8W2HhS3TdM5Z4tXrH1wJYmWfbv8t3S1SxM2n5xfHAki1yWXkWjFirEsQmQUV",
  "key3": "4MDNGXYj8gaEBWb6FNpgLyCAK8yD1D75atABVtyWQJi7j3vhPPNTtoLJaB4U5obhyPzJiizacWCxezByiN6rqHP8",
  "key4": "5fbc7hcejacifnfMurbmKbw2ATwUjN76MzvHWnx2wwQXCqaiqzkZvXNQMGYsWQuRKMopfQbSrwmCuT2wgdi4AtBh",
  "key5": "4fDpcvp5ew8fjXdJqv9jyQeH59icp7HxjNK6PS2ipWMfWianfE7mHE3gPt2MY2o6ae8ySMDf2rcX6xRWhtvrfF7h",
  "key6": "2nuaq1TSiVfBW5M1CC3yV3MqYHkHFdk8dJQbuxrTTEuETxwSoinR3ByUD61GEY84kGFXZMRYcWVYDHAU1jtgopjD",
  "key7": "3wW6ihzSzuJAxSjBp87j8GtG9j5BmBmtaSPhVinbnMDzR7Nxw4YDDwpEefgsEER4nY8p5y3UcPkSaF1Uj11ZsftU",
  "key8": "3gAmv63QuCkK8mJyD5zfXvPFxpxbjHqT8MVYTSL1oJfe7Afsx95bXcrrzysukAWtZQoRHsjXnp5g33mqLS4U48nQ",
  "key9": "TGRS4NvpuL9eD2mdvbfs8Rgw88jXc83McrcHkD4w6ijth9LXNgMdG7zJAUzp75tzfMNo7Lv6o9UZEKHUVtfDb5t",
  "key10": "4QMwMA8Vw41d7arcwvSTHp9AjFkUFi2Cfdx9q6U49WLos46Fwh5CV2KbsMHR6NVri4pdJsAQqrdrp6QexfMsDpTv",
  "key11": "37ADMt1YCL7zg6ZbfKKfKYiG3he8mgMzZ2c3z5DXfep2EixLFNrJao82Maz8Edfwqcu21Mi6uWej1idPVPNKZ9Zd",
  "key12": "4kXtNZsugw5HQ2MGVBC8EDjAWpZ1k8vL1m562zasVkarkXCUY8wZfZnr4tcwnnAWxv8z2NPkaumhxXniYHeW8aeT",
  "key13": "44QyvaFeBJuKpEapxcivTi4i4yL2NgWMCvswJhEFZLtFzzaLzvh2Nxry5ugANwb6KX9cQ6WMDsoKRiov5tyUQx5W",
  "key14": "3gwca6G2mzwCVBiJrB9W8q6ooCSqLpnGBq5aiSUEk257CsyCj5uXXStx4j7LzzshFydu3mcSdMFkFbob7jmFPVbn",
  "key15": "5tbPv2RhYRkAy4ZSAtXEfQ1MdtvUaxxmxCx9torefTT3m6mhuGTkTydY8TJ8KZ6rZ5ZeJiohQ3EQhdE1ZxcogMS7",
  "key16": "377aF9w2KaonBj7EYB1vjnbxpeD7jqPYhDQ7HV7g2Eb7S7FiqhnhA6TNtcLqdjAXYtpWmWsSbLsQjorotgP2Ld76",
  "key17": "5w3w4Pnses22uXbJT62w2VQrkMXbbbXi3KAE4bDL1AkQ6rrQc9WWr9eXmqusbkLzdySaEUnSAxBEVNXPe2EEvtNj",
  "key18": "BCzshx6uy4br4ykHkD5f4j9eUDez7VBNYxDkAi4M44GkJdUzGwuxtDBnmkLmrADbAc1qgMqQb8aq6tZoNHfQN1q",
  "key19": "4hbzK372pMsraBFv5vNAdX9tPRNygFBqbyZX3YDpqQxTocPYPmpHoCeX9cZrCTzSP337hjgbAznu6soK3v7YxUWm",
  "key20": "5V7GVPaZYKRFZ8uLtdQBa6kYFgmSw6UUo6Jbk29sJN7fpRTH9S19ZwmxdbbhhvqAWXs4RLp5DavDbb7WnSiMhBt6",
  "key21": "25kvLcJZWDYE92FL6fCDZD8ByHkmGX75pQxKTYH3kjkwEDYh2yrE78RG2focnyjibLDt4B49Grnbm1vGbWqEk5Vs",
  "key22": "2CRhVbjAkTA1WNUQv9vRq2gsDXDhKv8pndMDVQsFpDPiWfih18H3PbDyZtwLnnPLJuMRET329N5Z6oMuGS48xG9W",
  "key23": "2YbFfroJZBjz5VoUPHUJghKRdcRA6kqr4eDcK1JN4Ze7cR525EnxRymQpDdEnweEWwzLheaEVajDy4UxJumvJtEY",
  "key24": "5FS5W1ompS2RrHb87tF7HG71pru3WXE2QheMWLxi5C4FuUxYzEp48nSnT1b5cj1S4C3WaFta2yS9rguYqdQUPwN8",
  "key25": "Sdwebxg1k9ntpMbveYcM5Yb4HX5xAmf8dRccF2s1DFmANX9EyrWE2RtLUNCaLBnpPfrbtRBTX4Ub3tmoUx4VuJd",
  "key26": "2YnKGmQyry3iUqHb4u9PWd31mmoU4q4vdJmcqrqohpeyZL2LdZrJhEpTMv7YV3ijokrTjQJi1iMqmMj3HuRMT6j1",
  "key27": "5e4iDAthpzYgv7u35cDVJWvau3ajpuEtS4DrTQFNuYQPvvWo34ZrWNhn3m1TjRnwe8ngB2NugvN6Q1VpFi6vZs4A",
  "key28": "GjkCy51tBc6p4eHUGqg75zgS9EZCV7yMFxczhnR3aUvUTqbupaxNGyzv857wea8h6xiQeRzqHJtjxFx1oevBREz",
  "key29": "ZeEuc61Q5tKhsaztCPE9LD6kmSmETiPpN8nWnxyXsMP6GDeR4Btig1zqGTfRyr7naWR4N7AKXe7sKp3RXWS9Zyg",
  "key30": "2En9kNXwo1b5fcYPqvm5CwCdocLsoGF4gT3n4AvG4Zm3ZpXW9fkSQ9ShJjVTx8qZqnuiQEBJqeoTatRBMRbwwXB3"
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
