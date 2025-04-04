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
    "5thskpQ8fCx4VVExnQ69ZpoG4i3LME1SNaqwkfSC51fR6ayanRUVK31FCkqWmzW1nX2LFCjdPH345dfWkLTsV1k8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AfeRHzT612gaEaXey2A8bU3vRKia1DMUGimmTd8ZpgfTDGs5GfsmsEQ2ebVyTxdX2BiRvnfHpjFmsSYgJtjE5u9",
  "key1": "37nUDL8P8FHDJChUh325fQ2PXfEHcgnTvimEoFqfz9hopqWUmKcD1vVkvGkiKinBd4kMRNdbRNgTaTPZXci4t9yP",
  "key2": "629jYT3WZXX5Vn7xLzvqFZGwePi3jvF3ziywh5cJnu1J5rNvKpNaGZqV2QsZkzC6EJPcAHCSs7uQycdo1GVwc5di",
  "key3": "3DsBseQ11pwxFNeMdgkrHeSuqdSH32ccy76xEeonNCNFN2ri3sVYUWbpWeJf8VJF5fyWDWqmVabrpfV7Kkj3gSEd",
  "key4": "5CqhCuQ4TVwct1EXdW7fKGzciowKRkx4gaSoc54MU5rzcLDtSdSrZakZ8e7yFDfHHN8GftFXrH2YjA4u9jcHNosD",
  "key5": "2LkDbkHhcedsDjNZTc1V8uKpou2CwswJbzX48ZT82QVQ94XfoXWxtQWv5xDNmmrAPm2MQ5oShugZX9uXi22nDnho",
  "key6": "eEKYhBPw2iFHT8MCx4DwSoyKghztbkkMxrqphgbfTQjUjTGRywK3N7a5i5qRmZQyLLMicwYyQ95d5UnnTzaZ1Gw",
  "key7": "3c5kvAvoeAfkCwCwYYM23Nw4aN491j4yHfcM11c11iyMWygBSbaqYfm2c1AdcbLANaEafUcdDwgfgemEKxuvXAF5",
  "key8": "2oZ42eYDgxRiVZawXjm7dsoibfKp1XhWuCxZvEGf2sE6xk8RhsXRgkWdhtNftZeEcAix4AgaGgqQ5E2VMhRHbuBV",
  "key9": "5YE6BGobhYJdvvsuoz3SHuar8ea1o1TYXKnDcoKG49hPRN9SdW1t9H2iDxVymuresAAXYLyns5Hvw8y7rfekWC8R",
  "key10": "QQuHKvvSMYSAihgVZSg5J4KwB9Hvs3pqXDyE9yzjzMswyUBKQLYVoZP1yEm6ou8QT6Gh596R9hRHwacjKk1ggAN",
  "key11": "3ZdhT7gFRc4XwTvtX2Xj3kwvmcBVZqPaSVjquQMCAdharkFPg12v4fCDtizkCWXgmJGzdmUVVwWW7W1oSYyMiYtM",
  "key12": "4VCLLT4s2DpUjTWLiXo2LbmDDC3PJURJo8ACySsSTpAXVFbCga8NzpTE1gJZaTMSkzE3bx122X3pCunBMqkxsh4A",
  "key13": "61CSaVyKMe5crfB8x9amrGgmQ7LXcurzcToF9fwKc5WAzFM4jrkj1Pd54QGougVjQx5xWvuRp2Q5L2SzqHhnSjkC",
  "key14": "65vikj27iaX5hga4DrhUBb8TcCTUYbWe4y8CmxNCYaYkKAm5tM2bDxu4Sgs8VDZTWBzq31cRDVqkL6eMNMi7W7h1",
  "key15": "2YtNpuRp4uRdmGJctBnwgx9BkJEMr9vFnMgKpUsKgrmWmEjHxGPzrbheU2sRBw2kX7zgKcN9x3BgmgpZGCSbxvjA",
  "key16": "2ab5XFomJSbyWEvv1kDErQHqtbdaxFkTnu6kRe9XmFi8SBxrB8TDysk49Ev26UVk2CYo6fJMJqhb7xrfai2Qo4gC",
  "key17": "5CxYqq4FNjZ7Yv7SJfD53NDaUe2YBJsD6L7BXoH9WdDzWSH4eFMtArTuaBGZg9LwhDTigZ7o2MaMM5QwvpF9aLov",
  "key18": "47tov9heXZuVBhDkvumBnXLx85yUCDLRFCsdNYqt3KyuWA7CeytRSNwW4KiiYamYHTtGX26LE4RNt4j5yE8UeSGd",
  "key19": "4FqELKBgoBjGVxJN95WEw54VRQb72gzKg6xA5cDEPZRG2i9kDDuLNvmUBcD5sRARyJFK7xdJpbKxRhL9wFGLwjWq",
  "key20": "3wLo7ghybZRRY3Hrqh43tMvh5UhBqKRm7DXCKSdytWqSK7HF26uWHsCepeZiYSKo17z8UX5XmfTrvWG3s5WBrp1t",
  "key21": "3QwcQEaYCrye1sodW4Vj4rMrGPSKKrdUCWp9bQmdie35b1ZspaRjPjDPQdzaudusJJgQhcmN9UjidwY1VBNM9y2f",
  "key22": "3pKBqTuXas9WuajScfVjkGLPNWh8ZHpnXtNfj8asfEUnubpfZvGXLuJ9zTr7TcZT1FaNvQGXKz6MXL64MsRhojcs",
  "key23": "61c6aXdSsuLCRqKz5VpnGjq6sKPUEyyfpmumFCYoZfAEk46Gcc734CyuuogVf5X52xcGnkAPESkczpSDggzLdN6o",
  "key24": "29bFe2jGHs7bAiqGv4m2uSLvvgZzzt6RVEeufSNRfWZf8ipFW5LVsD9w89LAbatd2FbUWryyzL5CW8Qywi6Vf5VK",
  "key25": "3A7q2m1mj8onPsbumCVVAC5PmCYCgT3yDv9WdexFa5BhnP83UrgwuHynCfkW5PL82nRWc44eHDPcGkENvF9mGCB2",
  "key26": "4Du3nmyzeQq12VoCWUBrdmRwTJ4VD5GGuKmVQ23NDChCXBJpXXu5JX4osawhBvSEaZzYfXbwgG88BBiTPNGmjTDd",
  "key27": "5tyJeRnsnmQWaSAWqr4CaDnE5EEbbaPiwgGKT9aZgk2F6SFNBUCvcYSzEdoTF2bfdGNt237RpwELNE8gAGnVdWPy",
  "key28": "669VrVFqf2L2U9t7vJ2pmCVZzu6z7GDiLFNtctL3rE7NPyqNK8iJGTt31eWNDYXtr2Xaaqkdt4HSJ2Si2aXH4t3b",
  "key29": "2gmVpk67MapS2aCUYyPfspU2VbWb3mk5M7XiTmJEXVAWFMSZkH3uQLHFsuS9J6VH14799TBhGXLEUvH8bPweyFQ1"
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
