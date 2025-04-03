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
    "3Y466LB45SQw6pLEXLTcf8WE1TuGK3Y2icnbf8pKeXXsAyBNApTy1rCo5TzDuofXh1tLPvdK4qUQ63yd4ersvi4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h43o7ESakrs2Z3LXfTiZFnwMU1Q38fmPMiZMoWP3GcADttRDSASkLXfWGwstGu7riUhc3SRoDCSg5cuvJRGspXY",
  "key1": "4e1dvcb2kjdZd3LMC3T3dp44SZnVPpuA6EVvNQTYSjQLnmjuXjbm6vstRQxuH2tjEUifryyLZnpw8HPKCsCrC4c",
  "key2": "5NvhyuvpqW5nbpGB7vL9a47PuAx2WCdgRXENsPPZY5yQ3X9wXPASC3AL1u1GyNQysT2K4sSmcsUWTUtb87vdREV2",
  "key3": "s2zxYFEqbvjAgyC9GZyXUXPrrefd9SmivAN53jQodchgChyqfhzxXXZy7PGMTG3VPbVhhmoTvfGnU2U8p1hzFpA",
  "key4": "3PuxFRZfNrxKbRJwmHMW17jj1uufi7NnwhmypHRWbqLs3T3euLGQn5tjrqN3V5pFvNiRyBELm2e1RHA58LLg3eGr",
  "key5": "2tU99x4VTv16uutxVP7B2i5fGbdN1Lx38N7m3epKbP2ErDbCRVbFyxYGbTzbCJboN968Dvv7HXwE2Va7Lj1HwaKK",
  "key6": "61m8ZL5gAs9rEE6mFtpQmwGDcydqGaNweWK3UZzE4prxWvFBHU9Raos72WAtjKHSf5Hz9A3kkNpbQWD1d9H9yAdM",
  "key7": "3NTG9LJKPA5XJrdgWjX5MZFnDrHuPzwWT4dnteUqPxFoWHEfRHys7zAvK4XdyK6JEdJBFjQW3uxERZPfqZ771Ncc",
  "key8": "2FTWAV9nffuYQwUyFg3GwMR45sHekXbXmxXHnLsd9SdUH4xpjyHFsUazjgzHxgkrPThaSwVDQLqK7277ZrS1wW8B",
  "key9": "2pLbngpJiwZ8LushQ4XUwquTG2UPFJUeyZ1shPfRgLL8vm83FSdz29PHrd1H874t6zH4QC8WTCKDmUDY3JWaw5CH",
  "key10": "2hciH75BmHWQCQ5iyQ7zhTnDFFg5Tx5An1JTDQFzpdBfEx63CbNKNFiikgYfdkrwUz7kwTV3gkWbS8qd7BcCGiXi",
  "key11": "ga2pciCAsgDZ93fuCuok9EFZ7voapzKpBNYzsggur1z29kWi7PuYzUBj8dEdx1RrikDCxkAvGjCYWdxh12JiaiF",
  "key12": "2iYqSXHcFrCKGQJMAcmuZdYbu1VgF8cypKYnJjEz7gdUCRjiGRUC7WWfGo7DncJn1g5Nxp8fHb6Ydpghr95tcUBJ",
  "key13": "2cGxjYpeu1S23Amz2ef1MgaTicATzJM91ge9gFGrqtGF7rNL2zuJrfgvJWRhQmppWNTqNdTK7yV8avoXNV6LWVTj",
  "key14": "5FpvTABmRxZD59XXzYE7jafhuxNVMyUteEeuDYvCauQqqLTvHpQhjsptrqwBFCYnAfTqGd74a2LYdwtkq8yDYtCn",
  "key15": "2Ga3852sDdn1H7ou81bxRFP6UkpCLPRFQwxii8AvMe47vWoKzXPKpTcj6KfwncbvMrmXftiyi86SACmNhSLxwJav",
  "key16": "4H7PVV2UWunTRSEzwYnq8cWGMQDURwrBuc2m2GfBguPuxjjjvH7pB5irJ6398dE4M7ct56ArdugyddpYtEG5meaR",
  "key17": "5dujYz3eWHi7iEjhH3S4AUsPzsAHXtm5Ky17FoaDX2Ymd55o99qB3EcwG1cfUtjTdvBvxckimffkyiZiqsmamzaq",
  "key18": "26G4SABRTTU41Cj5F7t4WG71d6WF3msicVHasWgzaMuqixeTozbYs317sKFzSPoyrsmmCeU974NQAgmgLUTgbyeb",
  "key19": "2y6BKCtkW4RuZfWV1UB65KYvuHsV9n95ijnJRb3eftqhMozJqcqmxxZBckCAidAz48ZmhKaFbjZRoCd6RNpMxAK",
  "key20": "49oyA6UUWgRNAhoDmiwjZgkYwXiFT2hAPaR71z2Fh4ntrZvsZPUJfMs3149gqW4LGHLzVwx2F34tnd8dNdzfbees",
  "key21": "x7f4cPvV3dUBSGhDL7LdX5W7dRkS5anzysoQAnikvisaWbjJtwtqvhNzwYSNfxrFzuyFQmqbhK88Rv5sJaw2TCa",
  "key22": "9KsMk5FUPCNFL6uoydjniCpFSPG6EzyaPPBRZH2oMPvK4nNzcQsQfcFDbzW22rRb36vTtcumaNWvuyaKhxy1ADb",
  "key23": "33DhX4z1fMRrHVj9ETqXDG1V5YcPJcEL31LUsf4PhywZSWmQFahoyQfSHPtFSaMFvkG7cKV4ThQuetdw5eNnjUnV",
  "key24": "5MiURV4vEJvurKEq6zhVLJpxGUPRn6LZv796M4kD153jmNzWVrfrH5R4WN2aYeVBCCm7KJ73i7VLMUuXv4y4VLCg",
  "key25": "5mcJgVLns9SopNeAANUDBDcF2inEnyHK345VbuyZatPRHpG42yEj7kPqkLoz6YMpU27hcEiadBdpLNnVEzxCpmG5",
  "key26": "2ZJvjJcKdHxAuDjQwNDtdt89dh36qsjgmbhG2usDnJUscSDxrk3huETKWV44eiXXhGRT2P1cuAzezp8B3rH3ND31",
  "key27": "5iKny4wsnfUbHr22ibCKgf6vBPfL1UQZTu5Z56GfeH9WJemD6pETrTipxSmXTUoNrqvHcRWjYAQgMn9HiocLE3sT",
  "key28": "3wtdSvg3Wj7LBbGsbhZ77cuS3nbXyVFHHtxLgAztLnX4ucwuhG3Zvf5yQaCcBMDNcPNb1n3Pns5ooR1E2Afik7vz",
  "key29": "qjd9SCeRKi1bAkPYzy1jyJ3LqzpetGWYWmeD5X9aUrcF7J2PyFUKQ5JoJqRxNsgKQ2NccF7mCf7uJpZ87eTdVJ1",
  "key30": "2v51DBgkVoFtHEmcyvFRMCxrd3RtgsmquhGz1qtNpSvLpU5sfSb3QCjshYPFnbYC5WaSFeGnKdAd4zv1qbXPuBTm",
  "key31": "5QEgAVGVmZ5HeAHtBS2AcNbWwKfNBAnaDHGxPBTLL7bNo6744B81ghzSpVS5kNMKqdPEPTgKm3dmtgTkPozKgxud"
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
