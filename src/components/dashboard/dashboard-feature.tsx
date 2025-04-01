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
    "2n3hnX8tNsyyvUYneBgx6eZ8AA6FQoPD4abcQwNwyrpLeD4wFZCSfnfhnJ9jzYhSPhMLd5sb4ECdVhWCiVRhs5Zv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vq9rjdMMHHcAs3rFF6RLTaZtzVwbmtzxAscsJvwMeZAXDp6WeQvMPZTWXLAki1QFeNoaz34kfjYKGiwGDchE5MN",
  "key1": "4rDaqffuh2KG2S8kqmB71qed9XFdWZucJT6medPH6iJez1Qz4bcGyi1VHJMCvqNXkF2t7bZptaDV1u2RvHDr5nNZ",
  "key2": "5t4eFWyHVNF9sKatSoAPABvh1zCyZy4LaRKKqtBWLsLrEaDxZ1BLYrsyvivo4P8qPTyC8GEeEJp2PDxhWoVVNQXh",
  "key3": "4X1NUG8esTkyQfMkmygxyQVpJ3Uo9DhEAexKJqGs5kfWLAWP9W7hohGgKa1ojrkhfu28ok38wd1ccB2egZCRqThn",
  "key4": "2cwbSePGZALqCowKHefNK5Y6mne9Vd4iVMpkedAVD7WgAL9ybBWohkAaGwmLcNhoR8CttpHdpZC3FmKMuCEhf4i1",
  "key5": "3zcbuqfe3p3xCHhexR1TfTcsWcgmdi382Y1Ubj23Ebfo5ywNyDcBzkesv8BUYysV1GLWrdtt3YLF7GzvTRrT6rng",
  "key6": "4TNzPKwbyH1AkPvv83MDgJ1wKL8q3puBhxWtiU6MPUKcxQVp4cmJB85SwmqkSQt1sKS9DivQtbBTdyCcHWNGPxo2",
  "key7": "2hYfyq5KZckeVeF7SkbjZpsm5dyZQQDwFhz83CPtaP1TmAiskTKRXpe2LEz9noqXVvH59YAPm5rBKyCcsznXJDvL",
  "key8": "4SX7XMhvLzDs9un7QU1mFaXYMCPyVpLhQod3gKrCKpmSZFp4MkFP8VgVpZb4yiv3WLWFXUmAhbqHoZc4xxi3pVBW",
  "key9": "5meKRkhQ75VFkCbqgZrmcgE2Y5uBknmgLs9zTJkVfD6WoR2XdpkpMR1pdxbvfgk9cSnjqmSqNnt1JHW6oeBokLDb",
  "key10": "49f3ba4mTrRGx9s4akYep4dAkvZwHx9phAstwJ2uSHNBoQK92BDNR5PAB4NEm658rn8eZvj1tFWAQfsctxKhjL4A",
  "key11": "5nex1fVA7s9vjJWRKkp3w6BitWD2uZC1gnpYbbd4yh723zSxi7kjAeZZ8ZWgjkBDyjhH31CZLWCAafcENLPRKsB4",
  "key12": "4DEjC77xS63XuJB13Zt3KpC7g3yjJpDVaVMHeZ3gJNfbhHuprzx7CgeogZxmjV4fr7zraQMZ94e3FzQ4DpMFnYHX",
  "key13": "4zQFtG1z6TNEfgEf4kavmZy5jKu9uGRqArG6pPbfSswf2zSZFxirBMLZoPrBTTGJmkubx5YywYBkRA6dp3UcRCTv",
  "key14": "5c53S742KiEAeJfx57AvhrmztbLabMXA6qFvbJmXZQYLctRbKEaMMmJyvTstpx6YuwyZydXBqdp4aeLpd377qvZU",
  "key15": "vy4YPaur965EEtwjEjcdipd4Kuwger3NpdUoz7nPBdS1uFnfcSSLKqZjAjQ3H9GJRLkgPSEeDukkdu2Nm6GJTnP",
  "key16": "Ygx892kXPPzGK5hxodv4UbqQ4yi56PPB6yqbLTQPbip95Zys24njoR7Fc3pd3sHvhi7Y1Q9xSmRHQ11KFCVviyv",
  "key17": "n55HXn8wDTFdHSgECV18U9VVQFdmopicWNBSGP463h9vx6a4XjxLduUXgkU4up7JzvLt8eoEXQLp5Nxj2vX52SU",
  "key18": "32fxrFBt7UzU8MUUVKWo9g65Yk28dXFd9iDtUSmJRh9SCa7fKPqw3Ui3KqTTV85bFnozkA9Bq4GPfmx4q1LdcgCm",
  "key19": "3KE9QZfYZPTTjWNT2y9JFUj4h5HN7ExGRxMrWbs3yM7hjrakHyQeg6xxb2aTxwR84RiqtacpGPgXJvgcfmWbQPfM",
  "key20": "Fk8e2vidneb9bqxMC1WQUDnoxUdWwjBo5M1QYZpcZtoPbKiBVHnYN8nzpU5yWzUvazDeZbT2gyFANmSYyhgamAc",
  "key21": "Sr27zgSVQLiYwmv9heNoswJwuCAqxa5PwMrZ5XTsnynFKgg5HaxuYm7fA1z68vtix4m4dWs581ukcsFinZaR8qC",
  "key22": "37gK2QGJ4FFoUa4nR5J1HBKEzUCgfTjzA6foQmBvYeJXECL5y1V9nBJwrzSk4egaaeFZx4kDvu7mQdxiyjVNs36J",
  "key23": "2brhMSf9DXpcpF2PSkdBB2YZ3QRK3whHoSwqdj8o1nAX3aSXSaQXomLKXQFAewAP8Q7AExYx4PDVEAXxKTFT3jns",
  "key24": "2NscXLQF45bqPrZKDZexM2iCEpzoGSsm1fYDR66CcZ9vxsKRr5Pw7hJQCCUoTUMFqw27PuEH2u2KYTVdo21d6Ecj",
  "key25": "3q75NrYhb97CTUzTBFzwBRfxeYiEG4yqa47atzSFzk4VB6gpJLYg2Rwhx9N1kPgHcQXtxmadXVX2AztSuWjPboZF",
  "key26": "3wtz1oxnsShD2m6hcfPCJbpd7tDcKzuqcMW5cUxnMufefGBZGM4koJyN3DBhUukf1HR2VUXr8e8NUbWePpUz7xE5",
  "key27": "2bthW5vGSg7N9XqtYmqLDN2ukEaNB23jehcuyhKEXzVKxB8AfYm4mak4rRjNoAmXCtiSM9XivenP6ghPRW8rHEEt",
  "key28": "3nrdvcry9UN87BAk5VkLvFSKiWSVAxBtpK5V5j1siuc7fuRWzZngK85weZwkZTipzSrz3UrH3ECPkmhx7xzc4aPX",
  "key29": "4ymaL27LgKrUFLXLwzNP55Taak8yE3i5TqLaJP7CBtR2evmVDS8nXpdYmsJLgunzhgMfxrG1dbUZRaC3HcsUBJE9",
  "key30": "2X2ZA3K6xPa95gqiXkr5ZgWWNgisnsKbnnJUJWv46z1w5qBzPfqcB8Ea8jhq89ad1W2wRXwqKpQ3umqFM3KsjDMt",
  "key31": "61dovrZjyocQi4o3dsbuJU93DYe29fqGDe25DaLJKSpM95W3kxRunr79fkRt5yqw5T4tooD4xKS7LdyQPmcpHeDF"
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
