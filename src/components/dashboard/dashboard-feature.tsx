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
    "5vM9z275LBsS2NuepS1UEDJYZC2qEDCBpnWb3cF3AEKSp3Zby1scR37Tkzdr2AWVzy6YCZMNgdxFrNJqgLywm9z8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ssQcNFMXVFuPVBnRv29CsMPpYf61o7aq517JSNS335YeWzKTxHtdNSXd6qs8xW6fpMkFdVeqadkKo53biwK38zD",
  "key1": "2QNFxYcQJLupK4vA8YLL2j7GVXGHzmLMHAkS7wpVdC9K2txsSYH3tmx6yMGyVovEKDgd1bPLGPBpJLasx7nSTo5d",
  "key2": "i2srbi36vELe8bBajUZ15MjzYMv15qSqojScxekwKTn4whyY34W31jHHVH5Gt3BjgUQAPBenuPw5Bx8FogxG2Xe",
  "key3": "31j5Q6XwfySiW3JFyNT31sSjM8qmQXPrNDhBAETkYEjMZZHDaUrU8u3hE9BcjYK2v2ph1F2iwAdC5buYpAHgSsYm",
  "key4": "4puzY11StZQ7sb69WonR39VduL6A6PEA9eZ9zrTWcnDgKgiha7DUaYBzFJLhg8NShwzF6tTqQjBUKpMcMqmDTgir",
  "key5": "2RNcARdJEheMymWboR4r74Gtub5rcy8hme6JuZy8ure4TvzPgY724FswyWqGA3mhmPEFszpXDezpruPcn4YF3Hbo",
  "key6": "3Qt6tXwRFykaq6rNb7qwn5MkP6CeRKTGWBCCwRuCQJXkbJF7i23CJuL1dQFPPqAH1vC4ZAtnNZJGpAv2A3VpCAks",
  "key7": "3QKL8Eyq2Hxa1HZ2VVMW4kPXWdR3LcDNYFo3DjHRW14NA1rGDJYESTT9yWA3v5LEXUpDjEHQzorR7TMxPrHcZHi8",
  "key8": "27EZHDuxnfyB8VxMgTi7qzSASpgRLFhEe8V9HGWAADc8BomUdCV6hxbqW2qzEf9kBWiyTTuqgrHTSH2F9fMMatEe",
  "key9": "4WRmwD9QSPRzQLs4uBJ15nvk4weocTYygTrFLV6otEipAqwV9rLWc3L4v3jX3wBPv7WTaf1tEbUmxoaGeyrPWhiq",
  "key10": "3jh1qYhyzpngDtonDy1Z5f1pztPLmNTuejgLupzS12AS91FJyZ7FgsXyMRhwGwpGGB8QyGYUpYR8KoukiCLqHXFm",
  "key11": "TqLDFFwNNDtUdrRyByPiWAyaLSR9ZvLwWUPv6scDpETfjFhgGRjbjzVSMaMJ7YLE6CLh5TNtQRmQXCAENFDAvRR",
  "key12": "bpwDJLbqQ8a2VBkmPeKpthqmXcM5faz8mnybokVRXto6aKV4ZgcoDbDdTzr2SeveVUF1Nhz6XLuM6b5qB6XyUwf",
  "key13": "4jYooRicSTdU2JPZsq1qrdXn6w76cnXbRx9aRbPHPn2FhZhoFoYu9gk13hq9hcVjMX24aZGixSSCYYCteaYjaUbH",
  "key14": "3EpudDb3f1nYqV97GqCWuZ7DQfqVfQNLd8C6Ax23e3MAz7rnV8FQ33nA3Bwos3KAMQxcZWbtpSQGKsJmvV2qtNau",
  "key15": "2MTZ4PiHKE9euos7AnLdjqaadujR2DSn7ewM3QqmUuJG9F6krfq4P5pS4Cr6gWZHUjpQqasmphz3GBKckJah6YZy",
  "key16": "4aKzjvYZWmTdirKcQDn67j99gqbsKzrN2BeRD6bmZTGM5UtzrWVRaMMjaciAi5S1hZcwmKCp2yYktY64uswcb771",
  "key17": "49MdPBPhceX84RxNEJ2oDhyk1J7ZbzYTgrH3HfokKw8H8RHBtNkrf3ydmsRBaS5nnCeMzyudkevhN47AXKvvVg8h",
  "key18": "6W7hyT3bbqeSi26b6AfTLSkj1geM45zn9uC2ems59vcCfR7caefpmj3tPaLWdgkTU6p9FRX23hnXY8mngcap7gw",
  "key19": "ajah8MSGdf5QSK4cJSHGq66LVUKQuWNkg7P51yceTPmwtJaddS3CELUPaoMobXi2H4TShwvYPKARb4zndp8KWJ1",
  "key20": "5FMV4GSaEcZgxPx3yoTe97J7JQyhKUdie27CeKA2nwVnNPoaGL9eZTxUo91kj5farizRmzqc3w4ZUphxA4RGwK8W",
  "key21": "3ghVDni82bgRnkTMbGRkr1XXu3acUGStPrqH1sLvB9Ew3itSqzZyzaEYbhTbH7JC9wvmCt1UykLQfr5HjPATSvJY",
  "key22": "dDFJoXNjzzdSkKe9p6dpLMAaKFdH8YXxB98d6RmxvRz9JhdoGHZ81vY2LWexMkKsgfMKRmUWzwC1GtUeKTVpPA2",
  "key23": "2P5QgDtD5WV7UbzEbcp3Rh4zcf6S1epyJ8CSFfLMfGXQgXzQykQi7wdmVfuGQPmkr29GJ4PFFVbnQV2b4k4uHiGX",
  "key24": "57UA9T1xUAdbVRWchXefnbkWRQtGa6fUvbHL56gqyC2evkSt5ci6viEaecwCJsZvwf7bVHEyLo9LczXfHDwGffAt",
  "key25": "4kdybpz7eaxRATyAudYCnD5WE4LjvidGhLopj5MKoup63C2Sn5RxszbWouS1QosYzj3pyvieX7YG6jQdQYb39SLd",
  "key26": "5ynkcUqF4Xjgpoy1tWXFRpo5s69p9m8jdbUbfR2dkHaFBDtJbUNa87c5Mid3QuyMV3T8cUQkqtY1gwwTZrc1Gnfu",
  "key27": "3wpqVmHCpVqUR4TYPw4hnwmUzpKobnYyETWrEwL2eZUf7Z8274ZPGMP1F3G4h3rnu65PokWqLY2sZMwtPjak9zik",
  "key28": "FSLfmCBfVuj1eyuvBiWx2jUQesVPoeZqMn85Di8E3qEV5K9sZErZodyvUdPoLUqYbJGHQdp4eDfbKx64zZFGkm3",
  "key29": "4qwSYKrmkADkY73zzYqPV5Ve9pcZ11BzvPjxAF29HHAW6gcRrQ7vANceZ1XCbN6jY88xTisUCetfHX8EPLk5A9k3",
  "key30": "4S7tAnH2RJTW2VdggiBQPxM4GErjoJ7mKcvDherzaTnSjWtymPz5m9Pv7Khpf1b88rTPNcPAm652pVzaJScBvofP",
  "key31": "5NTY3yiAoCTmkE6HrVfRJCwhrExAU4VCea3XLZr7Z2NuMWq8axjAwuj5cNneR75NgtyGos1H5yLyYWBhfa5R3p9X",
  "key32": "27rHiF1DGyU3W4jEh7hcFfW3pFQewNr7aqxJgwkvGGBZno3q2h48Z4Gw9xtBZ9jhamDcvKjwrRwKVPGh89DSgHca",
  "key33": "2ZmLzErVPtFWGhViQCy9Lf6MBJcNQNHjrPc3Ebu9kaV4MtsRp8GsevFmxbp86fJMXC3X4fDjywM43joXzTprDv9V",
  "key34": "4k5Vo3MMSZnVSQ6VWQDoBnfT23sx7RP14C9xVPyDUXk3oJBMVF19sJhe3Fd1GpeJo1eakV5xC4TJLdYZTHTPwfmF"
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
