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
    "5QJozUgKbRWwidJF9i16MSeCaSpk5GXcYdYjMMj8bi6nG14mCuE8WvJtsZM2bGAb5K33871HVPxVaXuX53k7oUXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61YHEZL7C7sbi2Nuz2FNgzfwyARbV518bgsqHbin4u8NwnhZhe8J22Vqhs2VMLkXvLV3aYvy4xZnrPhRkhjrXd1e",
  "key1": "GWeite1s2y3yNXURfvZpZNPXvdjMcWBVK9BopBjeyQedSBeetTM7DqmuLNTYXPFd2i94TeCEcS3rCQRMiCKxQtP",
  "key2": "5ynKvK7A2kLExGuq4eV2SzKQr5Fu7Bvx1GrfGZzinyxVfLFuPL7joQuYP1rETrTu5XF8FtEj6Dg2bpfmtDtmrXp3",
  "key3": "56otNUa7EFrqwkorv4dgHDorJxCDcyLdcd6pvgsDxF1S5eWrDetP2WJusQrQkNderGRSzUVLSmSUCxKBAYwQCPaT",
  "key4": "5VJAyZ5iudsTqm3MmGa1Kd1sGdntKfRNc2tqhr9nYeTnPyCDocvSzZLe1J2dmK6UdKP8wskBB1EFAms3RevyHa3H",
  "key5": "46HZhBSsXJKmfeCtwCVDmxr1no3soXUL41fCXDcJJZBiaA54pzf7mSbTCmMxHmGuC69amHAr8qLTko2o3tznMdzp",
  "key6": "5rsyYjyfyfgGdsEF47rHtF4cS1XX7fMMsYmAvrxSPb3UHrmYLEjLabfVDHWy4SbZu1ygxMsAgFnkTa4ndjos4kjN",
  "key7": "61BwmJ712fsAeY6WJhvVCjKQ9DVsWwAmdgV2RTgxTP3phh77KzD4YzJ1GJ7qmPTyF2ofd11ce6hMZaSDT6Sbv2bN",
  "key8": "5gbDZU5FeCEsoJSQ5Yth9ZVJL1yC2zqZvxQ6jDrghaGTAFEqyhfscTxLP3QwQUDYxuwjByoyvRBtVWCySBXChz7B",
  "key9": "2fTGcj8aVtSzq69hSsWpMKc6D8qSeqS1ZM2ytZLvdMcXVUGP4tTKwPB45TXMWb9pLFxHZXkuRyx9L2HmpUsV1B3e",
  "key10": "5FUevfVSCP9ehhevjVdX2C8GgXftVQqdRg8etHQAaFwW5JbsNMx83YAB6sjkZatvHAfh8CK3RhXBTvgDdm31dTuo",
  "key11": "5EcsttHrihymJUY2SmWvkhZWPisGcMS4burkPJd2no8ifXKT25UgGn4i4PW2UNRLHdd1huVnub8udv7usHeaPk16",
  "key12": "3f8ec7DqKdm2WnWRJMezxqpERbG92MyfzCu3TbFj4iscrpzV22xTwpeh6zKo49QzdLu8R4ETqmenoGkmxXX8B25b",
  "key13": "2TVXKPE3jtwV5pPNiWYkbgcCBQmcLZD513HvUbm9GTkx9sXQL9XCzfXdaV4qmCM8vGEx9hvreNj3c1xatTYdZTZi",
  "key14": "o5GHPSyP4CS6bgSbNDijd6GfLRxE49UzTbYT1dhFCjhqSf41uY81WZPvXYLe2RgWreNY4Lfpq6bpLRRJkLsCiaL",
  "key15": "2xwJp4NaXgV2kWmziWT2Jp6VTSRNYj14uBJjkqayydeh13gnyuLBKvxBnZbyG7PtC7GrzAvafACckEStAUADfzGw",
  "key16": "4D9tdT1rThZYCCXfhQ1Q9LU5vtDDbBZPuQeUFek4FtE1B9rk9gSTPtUkTo8fQ6mQAyzRX9ScPinEDBZ2LTsvS32K",
  "key17": "5VoWKnhpfK3SioX6qwwmbbAiRVC8dRdvS2oQS8E7qpkyVN9L89p9YD8S7yNKkLkKUHQMPwLZoJVFLhgn6oHGXq2H",
  "key18": "5XWH2uZcWWqV1wZKi5JYsYw2DpAQ4TwcTZGjFvr9fSeojgRsSAcD9iFqNVpHTU842WNhvTQSbqUKBd9LRbz49SPw",
  "key19": "3bEWTDmRzmC7Zi6Tj2nq4TRx7wzW751S9UwXucagjwm9g46ZpsjHFGq5qMfmdkpLqQjBJUnSU6i27rCbu4JrYdrN",
  "key20": "2BETzkgDzqgsMMiLGc8iXVRbin1L4uUNagKo2hahkMjUsdELJ22XR6jHcfxYX5mgPuCdw7pwHr2KpakEDrMP2VBw",
  "key21": "53HzQwnDt8DzkxH4SftVhycjxPUpsk2yHrNigoTTSV7QVqt85EDxPVN7dwtNEmJ7udXDMPbKFDPWSAHtWytz7wJz",
  "key22": "55fty99k3CzS4yG78VNH1x9UUyPgyqWMfE5N3BFz6Z5rmSsKuEBGpxig8XEZ9YVTCZaTMjZh4HYHjxuFX3Dzrd2p",
  "key23": "52rTcKoVCJ4ZGP2W6uFtuawQ5P1HJsx8SFcDfX5R97EnPvFWPvodVqrg84nj9sNmt28WjXnVP1xhz9iatoqHSbXc",
  "key24": "4mf2pNGrZTt1zsxZwKsLeMvEEKnZhMcYnodeoVSTeD71iPDUHdZ4y5sEeRntXiKpPuBXoTQfZog5apH21S9BYeMk",
  "key25": "2i6EmYfBuoGH2r4eVzXwrDrYkNQWeBYuzR4xSNXpFnBp9FGzU8hANBdncmSzdaZjppWmbCH6gVd9x5JQkxeyXSPn",
  "key26": "41vb13cvSAnWgGKMTk9r6Dqmsoh5gqbP3hmsWrRGGDuuNH1Q4aWqt9rV9UGXu2uFyxt3R92dW3TWz9WJXTfr3qGU",
  "key27": "RJ266TGhGH4QNoDUXcYNob4VrNTXJtg8knJfCncL7LVFJiV416nniW7JDSJ7P5XCQGDdiuuYL5B69Kd8tduFokH",
  "key28": "4SCsM9LFBDdQqRUt7JD75KuFnZSYRaYDgtP1TBQ54n3SL4WX37jeowCkf2yT2xbEYLGe6q28sjG9mgi5Fq9c78nU",
  "key29": "rpYQZ3sxWecY3Cp1ePdK9rXJH6FZoPxNy82XL2vE1N9Ma8WVaFeapEbQa7o6kAn5rdv6Ai5UvE32E1gube3AzT4"
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
