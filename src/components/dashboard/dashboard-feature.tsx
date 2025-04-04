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
    "4NGFSGBgCYUQ8mAQzKGpcL1a7ZHkWvo7zEXU8GDCuo4HiBX1W75PWJsqciaCZYtat2EzCLhsWAJmxdQZo5DFWDFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jMFTrQF4Vi67twDLkH2wttMGSBrvmjTSyxfSaCqA52FMw4NeMuqiK5TtKa2aFyhPj9TsuiA8YPgtTFkQ9wuHJZM",
  "key1": "YyT8rZZTasiw14HgUxT3mcsksshsoRNS1fgpr3PUgcXZPNr1YhWzYK4dEm49HRwp7AYKiJgn64VqbavKe3vuWN2",
  "key2": "4zMV13LjnxjHAGTBggokPom61yaTPRcFopmGroz314TX9Mxs8QeEkxQdovqp7SxZdViHrTEo5dneZzEzkYqMBgyM",
  "key3": "5cXMopAYNXRH6BP4Zu2jGp7KgeyMJy4g6CSvkNMtLdatauHwZNsZk4iFYh9NtWNJVPVKWuNs6NT1qVa3YGJ6F88r",
  "key4": "3tukseYLxgW2YSA42XoDsLRJ4JwrQDHAAY3ER8uNR69DU8XGypxei4NUHLs781NCg1Rvum3cBpnkiVvDsNsJ4dAM",
  "key5": "4VHrJEbi6bXMLERbVRY5diX4AKzFDLMWBmKsADm4PR7MXZsv8USB14sq16jbcWbLNrRwdFN1HtBt3evSXGNh6pai",
  "key6": "3JXrtnYUof4MHbFumJK2cUpvLBYeAehwNVGBNpNAdJ3yPkF1k8AdzpmnSHqw8AZD5B6qFVAqcsB5VoJJyi95aMHZ",
  "key7": "5p81MN5eb251rsCG5Ya2cTDJzCAj1UwXEMeBobenBGzY9BszwLezGwmTS6rUMn6kRtXyVKGaYVd2tY6temBCT3gE",
  "key8": "Wi3wM88r7pv1bWT2HqNq7Dq6kboT2pwvk6bcRUGs3aY6etPKRVe9dYf9MFJFPU29EfjpK5dzEFYecPyti4RmwDg",
  "key9": "1daF5EB1orzw7SeQ1vrS4YC167cLYNUCqzagPtGTBtfxvBLzMmJKuamSMtFE5ha6J3ZoTWqYXmsaosSnFTt31eR",
  "key10": "36RNdVzRY298mN1xJapYdn9GBN2xisNrXFzfEreG9xbR4NLTwRSdfZExVP2epTGCJCktp79aVuuVv8EB2RyhDEap",
  "key11": "49T9doErxhYmHe67CFcbt6vMJe6ckkfDHNrUiTunPucM4X7H2fyjHP2t7xASXVYreLERCW8S7423aSaPTK1ynHV6",
  "key12": "4TP5pe9pbcpG6wV55trAb85VTr7YnxUGx1FRR3bxxs7STNE8yNFbDbWmBzkRs5aAnDmnk79TAMhzainp5vMQsvX4",
  "key13": "3xTRpWq1FRM27kSbaKD9DvCm6P1bjQaJCtGHJ3M7KRpxSiaeZNknzx38JthH3dnRJXjTpVpjAGPzfeiunWvrjfvL",
  "key14": "73APdDtfgMypLoshRhGsT2DGwoykyRZEmFmo6MVAKPyjgFoBBkhLJeVQZcQUaVCw44BeUaVL9uLryASzaUfxjij",
  "key15": "4hARuZC9JfHBn8Pmt9h3AkCxTdpZbTX8MKfJPkH2DmcxLYjibFAFzT6W2eWSq7boAHzEtMEKXA2Ywd4zf7BcLTR",
  "key16": "57jNhokDskUEoGxmotUT87ZtUvduqvqyWKhFzw7RBqbv147i7Ri5rbjwrCexJS4WV7j7RHFWMnjYEHyRzJ9RLm4H",
  "key17": "2aE2X72qfdzDVSNYtTRESUspciSQ8RQpe6pn3EomrBEjsKNHbtPPmhfJTwFshEDRmzwhPjW45AukHZksvheMMDUN",
  "key18": "5dRpwnxZMTYGUiULMqN6e2yKEW1Nte5toTSRFBpbgbx34qbbDFzU8SgoQkMNNnBmKmgbJg4mv9ydhYaa4T1Zu9e7",
  "key19": "2YQWajFp7zf7z3ndkaEGZnDvLLenQsQGZL1jHGcJHLHAip5nZJ87Tdn7TAQBP18xCMS1JPqbtgdRJQMhUtUv6vKc",
  "key20": "3SKxaBahwEzTH67p5oSFp1eHitXU7csDjXkauZG816LW6LyjR3BECuWUjAj5HMc5ewBMYLFTM5f7TVzSwFzMvtAp",
  "key21": "4YDt1ao4uEr3wRMYhV3WLosHLS8Dy8tgb8veRZNkVKvQDhsZkXKmXVCHemkt6hV5mo1ffosaxhupQqrfnJAGD6Aq",
  "key22": "3aVdaejPiREXu3T5ZuyXqrDVc61qgeEPBJQBwUrszpxrTPNJtVW7NFDV3W1i5s2r7fTjAzZzuBqP4x1tigqv6XL4",
  "key23": "m1qUvi3toDrUHpZZzrnZdDQPbcU8TpLHykzjusdeV8AFBtD5V6kqKKb2z3jZuL1sVBSJzJ18GvEpUJxCGATBGUm",
  "key24": "4sAEErCzfdDAzBzPamHbVF4u94meHvtXpdZtdqrJQWXbzxerdmKnsTrReLDHrbDkii6bhxRH9yLTdwH2A2R6TqNR"
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
