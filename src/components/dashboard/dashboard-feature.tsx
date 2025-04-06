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
    "5VMYTBGa7gBHD4aHX7cN5fBbprit2JZr78FBZMWRhNWGvTx1RzSmEY9UCAegNWg4WWjdfNnggr8PxYPpVLDpFdEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MZALRjuwrgwAX9zYygaYp1LsHugFX4njtuPvh5u9onECfDUo67YcCk42nT7N1KWiWY7QXtEEYRzzfKsGC58a92o",
  "key1": "4BkrKBaGS44ES5nnoLemc4fpHSUcVCHfEUxdTnzgcGL2Q7f9VCeEnPVLEMhAvHHbRXW2DyY7ha8mVJZAAy9zAW2K",
  "key2": "3j5Enm3GQqd1YLeAnuS56x7a5rqC8c2rL4wk3vUrEJhwWVYjSaf5sS9gWcaJJdgGf9QJvQiKi4c9S88Mqqj4ac2q",
  "key3": "4Djx55B6aRSZ2PpTvTEKboaUBsK3haZyoU5EMpqe4ai7BWe9f63cWBAoBAKYB1M2hnaPW22mXgrgyrkAxGuMUDSZ",
  "key4": "2gKV5gUvrzLr7CcoyQMUCBCZXmiCbDQyzSUVTsHfEAALm9Szvsjz7TNiUiDqH68UfR6mN9gEojGGrQcKpv3ycuUF",
  "key5": "52XgjLFy8ReWsBshGq62RxeRjfTSkQivfeMgcXCWZaNiHDtMqhouksz4hghnaVr8Fs2qsJaPQhhUczbEDyqb4t2j",
  "key6": "m7vTgs3fThRTbfFfv9P9WVjzYcHcZEXdgmpPynNQTxe756ZjknkZXS2NJDRaGNbRsHSmz1onoZWAmUxH2qx4NUz",
  "key7": "6oohMhzaAoH5seEvL9iQdrpy1KVrZM5c3vPsL1jqwGVyH25e8HVs6YMgcor3ADdGGW3aTxD4er3XEmRd254oTb6",
  "key8": "2kGwMXA3YbZCkLj6zykJWrSHG7yr6oKnM4wteBMAnS5WjKdvWeBLotY9RaAgeHLUjiSVK8NGwvZZ2sALrDRGjTwX",
  "key9": "3hQyhAxaFS8XERMVArXbj2mfHwuAs6Gr4m5g1i7pFATNmANERBLjRXGTsTnVhrTjRJ6MaB3VhPDRR5t3mRQH1Hv6",
  "key10": "47yVusM8uJMDnP8RZL6RynjZ5UtyMJenCw2oCpegovJ6RHxi4u6dLdSNUiuhc3V1dEupfuzH5pa1D3CVWBov9cwh",
  "key11": "4ZQ17vtoHhoUVU9dsUvogyrbw1jfjczRPomKUumxW62o6zsdsFxYMCLRJsCLLwnvMS9TTwtFjXLm8FC1iyHTmn3Q",
  "key12": "3aRW1GR8XXuEG7uEwx3wKEeXBWDcMTUWZFgwo8cyQjj1hyCgXQ8kFqUeat4tAHaQFzD357q5JWiQRedbescKyEhE",
  "key13": "mXB6Tpr39wsAxSY1XTiL81mbe6t6TP7y2jejBnawdiGTsF2tBsDGhJvGjX1e31ZcpE1dHv3TDsXqfxiCCfteC7x",
  "key14": "2Kyu538nJSWf4WVTEyB8K4eNWgqPnFpHFxeDKq84Dvv3Ho6u8ie3MnpVbf6GZGawJHP2SKUk6fpgZeqLHa28g2Ct",
  "key15": "3i8sWyyg54NhbDqXRVey4yzkuwYLHt1BheD4KxdigbdZPPhPCzYd9dtKHA8qECtCGjTZTA2iPCxZ8JygQTRCVojD",
  "key16": "214aPFGwzFW2pZyR7zvCxmNY5GKVNtQ3toDXuTBSN3EUKmDee3C5hkGXQcHkT7Zn2f7Yyn2HqwHd7FyoNJSShNma",
  "key17": "38pzJooCgjtc1twKwm958Lo2udCNK96d2WqgchbvWP3XhdiUChzTB6HcBeEh57wLeyqDeRwPyRssn8KUB6GWwLnd",
  "key18": "4RaZBkHdsfZzvfRQDKVLdN5nyRUqQttTuNLMXYWH9HP7DM54Si59Bribza1ZHzMufxL1oroRBPp464YtSYFwS3JR",
  "key19": "49FCQRP3QdJFexb5G8ZKbYURwNMTxzYYWY72B7Zmje2nXqvVV41VFGBHnruztWt7pGhvmsTP3tGbaU37wZmr1yGK",
  "key20": "33awyYiQpA1Ape3bPg4wRTMvgFRMGSQ4ziwcAjKizmtCbYxqBLfNAroryeMVvn1xa7vbDA4243MA9Uns3tMtRGTK",
  "key21": "3BZeLz3X6gwb89os3vWDQ3RbS7tynacYoHGkGqMww1kwoXKzgQZuFiGik28RTdGH7wstnw5fnwk6sEAJMA7WEUwg",
  "key22": "4iBpzY6Bn33qRgG2eRraFViy33FAxccMCA1bcP6rU235G4LG7u8K4ijR4ijooJZhGFAwbyCy55t3BfWFTFHvVXgb",
  "key23": "4QkvChXCKRkPeJzorQ3XDrcArsvtwb1zyVoAVCbepbPUEaYk4vf7SUe3s88tcu284Z5pffjsFWcbAMNCJrAoiGR",
  "key24": "2ipiYScPSBabvFohe6vLrbxc4nBkUpjEqu97Ump7b9DShzK25sv8e6ZRAeeMLswK5PBLZZJBLBWxgA8fAF3Rs4Y3",
  "key25": "3JSb28pf3qsFjfqNApb5cy5Y6sCDTBuuWzcsix454YXYTUznz7XkKZnHafyCSjrasTM9XFhNfPnzqxtdzGXawPFS",
  "key26": "3JPkZn6kodv436GVekvHH4mgphaUS7U16n5q5BmeD2sRpBHgGUzPwBcEcJheAAfYrVSXVRTPJK6yYHFAdc3zKaoM",
  "key27": "44g9FcZeGbQPW3gTPW9aJQdrqdwY25wT9SwewAYykchCCYvtHvA7LmzeBdji4xGcL5uR3qCHRVYa67t7KTEf8KAp",
  "key28": "3qkG5wVpunKjycdaT51FxGYkyvhDN69H3PNv9kQUE44bphhDDembuKwYdwmkT1daPGkKRTfqPfSEvp4fJ8hPrJJk",
  "key29": "2vw7Ck8v5gNgBpHGTdeccmsajhE3GF6XB8SDU5FfrQkjCbYwZQUmARAfcpp881Yom4f8Di4sTFdL73wJ79MJ7rYE",
  "key30": "iS81MFFzWyXSMUgU9XBoxRVnWCY1D8PcqyDtL7bfpJzotNTF97G9MW8K1PmrF5uB8tcn9v83xMwTkP4HzCEbZWY",
  "key31": "2BVQBEUefVLwBQEk7Ns2VdQ2DpHyzFTTG72zT8pMNF1xJEFmo7b5VZCdhQB7mwm52LYf68C4FMM4drjDTsv8TSME",
  "key32": "3XkeVTb7n91VdiPiZifBkP4SQkC48CVYHwywX2LvEfAV6xScoPBsFhRfiYivjUqdj5vKNdUEVmMBgPJcfbkj9FZC",
  "key33": "kd9KvgNfFTTmJJz2Pn7Tm3bdkRuTc2mezgySuSt4P6QgBfX2ifhizJzpznf54w6pBSXNnxkCVCEotPvvxB2giJb",
  "key34": "5PNJCUcD7CnJdAHF8GqUpytPbXz7LZ5YLPCBFsF3MuiziQuWcwYGLF8fbzvoXLcoCo4xy98ATfJHwj9jFyjAHVAW",
  "key35": "2sCEQ9FUXWfskJbaXJRg2zdgDgBgprvgPMoJHnzSSHKf9RaRN13Rg2uxEbMsGnEg6dTjkEWFvFmtwaydiHoQcpQG",
  "key36": "DX6WGoNejJhQf4jDmiC4n1LqgRBNQBDTjWDLewHJzLwV3nSgx35zi7eMgLHZpoaNSyefxgsprubo3NyA6FX6Vc8",
  "key37": "4rwiGjhFwZhioo1CkHTu1HCgFdeZLzbsiSTinUHAyndrscXEjuBVy6W6h4X4mrW1rkNNGpkNy2qNLVJY84xGpdPY",
  "key38": "4SmYxuXbN3BBeyng2e8A6k1SxKJTDmZzB49pPEuFSkdWFPjwkitVesBNdzmjMe5H6ucXbWW5ceBCPEKNewZBmUkf",
  "key39": "1X6Rc7xMxjazFC8j87BqL8TaASpeWhuL3PEYrwQM9gPdQppu2k3axWYYwM2CmKYJKCN6PN3WLrAkeCk3SNbd1te",
  "key40": "mjKGXqiLxdgZCW4j3jNBSDm6SsisC996J81qse1GoXjz4pdkCEVvZmSyH2jiuhwYAoWVJvErhJ6DwytsJTe7WSn",
  "key41": "pbyv2WUx4cgmJAtKS8XAJTaWBegNTLWguGJPPTwVCMLArnoSxCtoTCTbdkjheMCrTDVYizvtX3kpwBb956fBjsC"
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
