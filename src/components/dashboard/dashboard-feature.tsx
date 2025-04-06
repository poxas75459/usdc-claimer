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
    "4J5stLEmPz56GuK6HS7NiKNd4ZSaGs9pVQuoUD92gcCqCx5yVFW6F5nWq6RWhWnfHJ4Gd4GYeLk5QWFVbWE6n2Cx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57kLfJNSPCRy3YsKffvYvpmiWH8tGifaSxru72dUw44Zm6Y5z1cY2okVo15MXBy8p5XUxuvSpU3NfXHf9wqpDP3G",
  "key1": "31PckESf8wm71M1VLoURRXcQ3UR7HdHfUys1rkBTBNM35v63sQBhvbXALPi778DYYNCmp9yUVsgtrjprP471DBbp",
  "key2": "L18bWAviDzRXB9tGyZpyTD9pYgoTQvGDCBnZi2r7kg7HTWxDyCUk5yjvSRgeVhAUniPLUo3Bvt39Q51n9djRLjS",
  "key3": "P9MBFxeMopdHaxmSajZoMiJkPS5eeVKKtoFhzxgceviekesexMk1A2jLNRKbzQyX78xrrfYpM3ET619wLBm52ds",
  "key4": "4QHNGagajqhucLMw3pWJdNACVNsmgmRK4CDig73fvVDmZAHCZ48iVkeMuoHCCj69KWab9EomLmFXTFFhcQ2DBfQe",
  "key5": "2WsvJvbpTQcXMJfZSgrB86R1XvD54aR1bXMqvjZRxhD4Vg67EXvQkbrENHZecLb1Dntcke6BdVSiPTChpYRXecG1",
  "key6": "3UWeMmH9XvCJfwNVUHn86m7eYBnp4fvC8TnbfmjZCMjXPVpvkQfSW15zdaHVUZZ6uqvFcppXHz718QNGZtFQMxeC",
  "key7": "2cWe2LeSLUiMH8DP5xmGwLkfYa5DcZ2CEJNgbVFUQjDESoZFKjgQ87SJ2m3r2pJzSkvQshtWyjF2vmAVqRHPk8Z2",
  "key8": "4GHQPf1hvXawgLJrk8TDJw2iQY6AedV3Bry3tHMafsqbvsWzbDNyrHQ5z3X8dgykiiSMKEfeWBWSiVQX5qj8rZsq",
  "key9": "2vpJMZG4SVFz9roE2hyNfvEYwG1HGWd6jPALkFraUStF1byoXjnthaRpC7zzBJ7LTVxGL35wRVVR6azG4U1VQBtW",
  "key10": "2J4jTGSD9jhCr58TwCiHBX5gbwuGRmDZ7A3vretS7TaGStasuEx3hE35AAG2RiJxynXzCE5jqKqNE8nSNKfHRi3y",
  "key11": "24fGdyViyVgsxXQAebcsNWjnxQ1UGYD4Dxn1BphNJJ898N1yn61nGGW1mVFoE15vwcx7pfQasj8FvE7MMMLS81VX",
  "key12": "snmJ96jFDmz738sr5zB7VND5jy2WigeyvcgrV7hMicEdw15zHUppx41SbTcfZG7V31VbsHktG5nR3MacnFCwE1B",
  "key13": "5bqoGAXQxiukLCkhCmpocjDGCvBxfySe25Yb6pSpUrU4Ukf2g4rWJ9N1xJK9vkjDzDtoAQUbTGMj14qaRfD2QtXj",
  "key14": "5FkEQAfsFWfay55wQ64AgSQj3r6zfaZhouwR5V2uCFx1W1GGcCKRteFzztyrRYd8bYk65tq7h5wkBCBhEh3sapn3",
  "key15": "3152hWHsJ2Wi2RiuxS6hkRYWQFzgMNDUBRJkbNrYiKj4rNXjAavtswJMMHbr3RC1QjrnBzMtAxDHMtYBdbkj9daa",
  "key16": "4BhfKQJHnFGonUgPYdNqhWpAHV3dqSWq1G79MtAeCViYn4hkhGQBVZS6XAurss2waAGvLiLESLHcyyj8MdwR1VDk",
  "key17": "jnVL8ohcrw3aA7atmxqxX6s1ASfDNJS5GKDgaz3Q7GpaShdtJ3ZBgWLQ5R9VmLq4ts9QCGu5TpFXjxhRQ3oM1J7",
  "key18": "2wWVVEAfq2J8K53Ahbs4hcVJVtfeLr4nFdSbkJvyMUTH3D3wvu7TexNGDDuEofAAa6BmNVRffgbSEjceu4oqHcmN",
  "key19": "2wEo4B9kUJEHD5ACb22DV4WKBDZHdPcMXXPRvtkLCTKKH3Hrv1Zp6UXu64b3yp3DZRCR3BWup8BZjWMDMFQqFLjP",
  "key20": "5XZVkVpNMgFYnBNiWS9fd6vVDZsWR7Pcamssz1nNV4WeLYVProhVNC95oF6eGd3qjTMG3nL98qFLgnjVJe62m3Gj",
  "key21": "KEXkqhY8yV7CzhqmEjYP6EACSKk4T7ahuE8uYsfK9MnuiwyCVVQWGh7qCjThP5dKAAH3EvDp52hAgaWKUBpiKJ3",
  "key22": "4F8FWpxBTXKywvigtUAyR1RZ8nJfaL3Npjb55PyRMmphz1oXgekagCnHJ74ADC4oWeqLCsiryPGdGqib6mMLFnba",
  "key23": "5NFRU41PbaF5vez6LPsHZaKT5eo1WKwg2HfQFBx2AFQgEPw7iqJgPiq2Tc9GoLF3XLNiVNTDQBmhRvdkYcv9MCNk",
  "key24": "3iZ6MSjrav5p2s7Re98SnSNMShbNX684zKhm9V4FqcXKGn69s5CgMjX7ixMCdKSg17xGvNRrRv2DZwrqm3XjkwiN",
  "key25": "2xZNGDM5euhMWqwuHgHHfYmd156YN2TnPrLWuPAD2dtAqoByZFHE2ADypW5GmMBYARkNR76cbiL62BCaiKgHXdin",
  "key26": "66fK1EnfdXvd7Sa6S8MWqiVzAceXEhrjoy9exkWxydCJh9tNByqfXVCUUbjc9DFPHcyBhKqyqCJWV17c9vZNK7a4",
  "key27": "YyzyRdKmrrD1TTj48FSgQ2dq9e9u4FBYEQVuhBdhPcakRo8jrApyDs63QPeA5DLWsn7yVvLWwP6Fv1tzjXFJieJ",
  "key28": "47wDajDF5VRD8vXH7PM49bids8QTBSKLSiyDJmprVnqv2TteD6AniBsABB4TN1fXniJyozLZazwcKPp4WhkMkwsY",
  "key29": "4B1DRGnhRmDX1Qepp41DmFE1w4qzpgCCYss63NqSFmRiGyKH3VL6ftWcZV7eZ3661Zbt7w4ZNT2RvjpGziEyTCNw",
  "key30": "3YoPPK8K5FCJeREyJLTmzvdjpU8ifQeFYegnNTTBaZmQyMdy9ccbEXmAu2XfN7KgdueiXeh8en7CQhexhyD3n1XE",
  "key31": "3TYtmHm1L1DqBi2K6n5otAK8CTMSRHUJAiuT8ZJwoy4jHJozatDA2hhfqucHud372Zr9Eh9rEzFPsUzkyw5zaH1c",
  "key32": "4trNphpwh7nEe5bGQBoPkiyGUiq7suR7wud2ZdpAq5dZqF8Exrs4E7q4rJHQmqiJ1pNfr12eXvjTSaJNt4kT9Yxw",
  "key33": "3Co6q1T8yWhHSuVCcBFBa2Ts45rq3FcCpv39KxtiaqNYnZiZYrLHXqv32EnfhaWpKGmMaLdykmMiTGtjCyy1Qjiq",
  "key34": "62v5ufPNbQsWqXJ8RCN9gVCBpAbqDShnMURzzg1qqtjoC6QcMohdsjtUuq5pFD5YUUBtYoyTEdptK7bUftJuXgkP",
  "key35": "iif6C7EUYT4GuhsWyyT53eNw2ZwVjj2b3XaHoJdCyxuTW7tXE7pPJRA8sqsHRynUqzeNwX68jceAGiZdzynUzUk",
  "key36": "4jFmUrDuEJCCdDDU1XSyko7eESDc6VGe9csgHsooYL2v9GcM59A9ipeyYigoRuMjHd1WXexoNdTeApvSHFBnxpXb",
  "key37": "3fp2KtoSRCqtBNAhYP99Agocj2opU6sBKr8rjHEPBBVqBcQX1e6GEhLuK5DcWvTHdKujvoWTX3AD3DaMV5EFkEBR",
  "key38": "mtAT8V83w5itiKU1Kj2hTcjY9CG2B81NUsEZMrLma7cpHkfmFauPRJgTXjptHYAsHSqJPshF2RQPBe1URbs97yM",
  "key39": "42bcDMsVZuHqV795PdmHQct7ag91Qxp5e3ZFquJqLDwMFKSyqCwBsJbEzjB4BEJXqUJxipNgWq4Nw5RUfeMxSrJZ"
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
