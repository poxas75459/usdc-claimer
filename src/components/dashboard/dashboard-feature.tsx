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
    "3oP56S928CJqk9ovN21km7X8v9dDHC6zXodBXmewzQbDigtz1wEjrHTRYwGdqH9iKBkrCjWGcL3Pihue7eA32wki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AUsxw7A5bwa1ANzLxa1JxqT49Y1SCFFVPjhnRdhYstSaA2uW3xHdd6VPpcsoPtWXc6om4HRpv6P8hoQDiu5QPv4",
  "key1": "4qmAUHyf1z291WJsVHE1Ap6wFWan9aChsKnHX7TZPtvWfmP4tCCbwVe1fxqVAJsECntar2jAkr5P1dm8HPoGTxJA",
  "key2": "4KbBCwKAvQhab1HryuHyeMumfEUJTNkYsoDEVcuoGsN8eXqD3ySDZQsAvEEVhroxnZaqS8JvKiYaVJNLg13PzQp7",
  "key3": "5D2fmHGG72izjFqrgUSeTQYyEip36SFoUb12eUWhJiLKHpm8v9xmPqVxd5mq192DwUdcY4evDaXXCz85esc7obUS",
  "key4": "4sbJWZYZa1keAx71YPu3X3zHCWXiizBnxzzpdjbEBKjP94fmEqmez1wbvwGPz4yWbkktmGCUgPu4fkcN25jW6T3V",
  "key5": "42gdjfiAeewmeFGa2KdADK8uHaLhBYxhqCmX6rcw6qLjsMFyAknaT9ZnioA8gXLpKsn7JkeHRHexDQarzRXBZSPe",
  "key6": "2borKBpciXG4Qq4tAqni3tXZPVyw1DSjRqxzRq7DfebudMUhmvpnC8rn13dNSmnZzmnRaAqUschMQPKuaUirMLnX",
  "key7": "JgAyvaDz73vJYXpxD7LReSavRXgDU9qWL1NY7Uij5gRe9fzgEyUJFgvc2dksKP93gak1iZNWAV2KFUorF41MfVW",
  "key8": "3QXXbM8U5dfvuwKw8613ZSj9VUnBk9ww9gUe7uUWXhwZSStS8Wu17jkXEEBVHU4SYYrVEnMS6G4rBz2si3wXnsQk",
  "key9": "p8pwBFGZFN82WiPhEq5uT2odP9KsncTGYrkYZs5T8b1HVaLdAbVBdJVtvmFBk91WwC9pev9AWboNEPFDdKPqBzp",
  "key10": "znc3H9usVLGRda7B4ykfjppYC1TqBmsmTEGbzWFFUZzH44jjTYGZKSHhg1mvGCMB5ZizT8zS81C4HrLfBbm98Ee",
  "key11": "2c3RteQ4ua3ECmcdNLBWjHjSWqabBFytFLKy2k2bKhXSQgBVyd58CpvaWEFrCNBcNiFoj2bKmEw9GyDj2LzopfgR",
  "key12": "4qGLGk7canLay3RLg4QmA1Vk5e3XDVvMzqMECDHDddacyqCiAuazWp9GLHnEfDtDqUpiMnoBKp2ByqWzohosHeQ9",
  "key13": "5jWnmzgdoRy6Rmc3RCUq24uTQELgxKENcWBXywpcUuDQzvxpeHx96gB7hh4vY4gcAcCLE9No6g5ZXMvJJJQVyfnS",
  "key14": "4pvz6N6GkJbvNKd98Mwv6zn8QnncNTA2GVWqqUXZbHgvNpXCxt1ZPd8KQmJcd8rbMAtBzKysR52iwFYXRWgj6N7E",
  "key15": "2AXuxQu2wjRa9ZoGgH5czbdqitP89Q9FFHCnv95o296nfwW6HFmoaxzkTe9Tm1sKjUxqs3mYAvDRzt8iVgBkG4fe",
  "key16": "368nZM1wBnHph1PmakUZx3hTzycSMm72dEszTMiFGTYF4LdfSAB5EeAFBwQxrcRRXHcEKvki78bssuVFnuDM5gWX",
  "key17": "21XBNf8gPFg4LWx4pvHXJspJnyq5uS7wW5yGgv2jSCxK2QwdCTDJzSn34vj9de6gXURNVsfpCVipwPPSM5xpJV1W",
  "key18": "3ANgbhFkprJJCkK2QkibEzfGbYTRAg4QAdBiZz5edaKQP1BvdDrez1VgNo8aNUppxkTTrkxLeVhMuT8qofeNstoW",
  "key19": "5RZTwgAnr5gYMyXv9uPGSViXYWmwzdoUnXngs1uDEfojyx8WLzpMam6M5yPZnJZ2erwtaPwSfPbkXYvbW2MNxJ1J",
  "key20": "5t5uFf8SaBGJCcZqY3pcsAqV3fDNAaKVoTJT3KtQ1SLDmHC1ZWtfopCR9fGnhJpqT216Pf4WmnSnQd94XWiiugKK",
  "key21": "2dAqLeCqJn7D61fk2fDadGKfGEkCFgfF1GxhA4U1JAFDR9uKCoxhM9BcYUrTX9j2U73WhRtFqMCb5rTDkse32P15",
  "key22": "4PAxbSPhgyQHX3Ba45mLc2e6cXsxFAENzsd3StByozQTfZtNq8yu5TSNkt9DHuFnMgftR1SRaT5Bi2Ti6vroTgug",
  "key23": "3HLkNCHrCN59UX6k1K59rwn9Mh9zJyPuVpUxePxK4VTH21ZLXcN94fDHoM2EH3JqLq1Ed3ijto16ZPJVgPneyNL7",
  "key24": "5W2ixbo1sCJJraicmadqFuaf2WM39ivpHomHT2zmDo132xi6mYtXgu3BfuVGbBkjAUPCjW15LVqFh1dKbokc1bnW",
  "key25": "4J3cB3rfuumkQWpWQZeuCiAm31EebvYZ7ghTgKXDWZsSF27jZEuixCQsi82L79zK7QuXvKTCyA8fKCiMMh4UnbjM",
  "key26": "BGxTF2B6wgU6ewMNMod37KwdcKQ1Fh57YEfQBSk6KcW3ee12M47j8EiSQxsxprM2MY3Wp6rqNpWArAAjNHeNFcz",
  "key27": "317hLG3SaDvfQPjNU9CgDEFcmWF4h1hF9mCZUp9VtHotNfVVLVv6atDGHi256RQpoSFfGtbCCe9rrsfR5SgzDoMG",
  "key28": "5kxRxaaHznVffJqyir4DCUCqXmJmUFTs479avxPhAyUWJZP9NeFSiUk14TpaJ8jxB4neGoq4mMmpgyYu1DXemW2Y",
  "key29": "3Uozua8pFigD6kEfpZV4fV9yAvG8urgyLGpQFe13GXYCAATHC2bSaAqqpwtSsExY1AQXCmM8uqm5ZdHNyRL44hi8",
  "key30": "3mDMXDQXcQiCDJzLtnttTzSuSXzHbFfCqy6LHJNyLWxvcspmxQvK3m6myEvUah7hxD7EqMs8tBzsJhJpT8Z8bEzR",
  "key31": "t6K8YCSqjCvbQCpXf5oxbiePcFvn3x13hmF8mbYmi7xesTcihoYG6GuTaMFjW2fHwfaJ9bvm7PVGiaUrn3gW5Eo",
  "key32": "4szA1zxcEvN2Totqcjf7P6xfHSvGC1jkj6MgGSbvJCc9T5uCdEVYEqit1zS142bBuqhxK217XCnvkjRYqeKjDXHq"
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
