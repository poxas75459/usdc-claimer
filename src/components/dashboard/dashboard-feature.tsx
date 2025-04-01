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
    "5c5MqV6H8ZU9LkBLPU6EkvQG3uyMnrFbEAptLQwKZS9uY2S6436J9cswAJuMavJPctnh9ryM3ubdpdpZsdLsrFnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sig4ege9C87jYprd3BmV4gqEHsXdviUHtPU5prGUWzZDwuGF2c9dUTB1UA4L6wcb7jTTmSTqoWFViFT7F6RwTwM",
  "key1": "5n58NmaJbH3cTYqh4osSXh6biLatzgQWU7bHzn6oyQ4ibkpiUihmF26qjpJxVm1pbnjBAhzi4vsymjepKnKNb1jD",
  "key2": "3qZj5ciPM3SCqvAWWQ2WppygB9W1BAMbbS7BYNZP7RDJfbTg55Cy2ULwz43cdyCRiL8BkmUnomGQLigQY2SUpQHW",
  "key3": "5WFG9f4smnWHx3Z97ugXPc5N9DMu7nWZeLCvq8YMuJpS2pcWdvJMnK9E4dfpD5RV1aDX5sf7K8hSB33bUgkDkV9X",
  "key4": "4z3qjTm2bhSYngWFX4VAtfgwg24sNR1XWndYdM4y3oigAwDntrJRRFgpsE43ffzFF6udK65QRPtuLMqN8bJaqjLW",
  "key5": "562N1nndRHTXfTr4csHt58bfPevMr6ZmmAFn5fCjkBDP8nd2os5jywWyMYSTok4vrcTrMs5hZxxf5HuD5sxkHw9B",
  "key6": "4DnqjemNFqvnB6C5XN7dUJ5aFYmfKSSzP7kQ7Axg9nP746R2qQWVArZXbGp5YtMs5ZGgPTPTxsTUKDnKKoyazE4o",
  "key7": "4kuvU16xjyyixcV27hDc42ggWAUbYbcc9wZJfZTV9gMtu5BmYkhQDrNNbgDgF91Mxgijz2sHkqN5oDyv468M3bTS",
  "key8": "2WTiMGoBcFS53FFvFmTaSjgao9T2BtpyrAs6kZyUky2JdY1jwejVi4c8fYNStvakz4qT28b7kDHfRsttfvAZfJR1",
  "key9": "TYq8uPJh1g4Ne6pwHMKuamsbABtrRYqfha3W6ie1hWHwkA2mwLYGKUZVm6S4WHc8X8jLAk8iZNCFXpArN2kyiWf",
  "key10": "2hjxu6tFQUfKfxri9vdPe94JD5gzrggR8KtYmyi5xn7g42ZcC5MiW4KsmmkJ6epz3qMQiq2tzLCiNiWzCn364Uq8",
  "key11": "332rrE6myrQigYVc43FHizcvdTH6bBmoRdEDsTzEURLf6Zi7LPBCgqQwKEvfEtTE8NLwp3cFm9KmgKtCx8nqgPCA",
  "key12": "2Ct4acp2nN1zJLNEy6zHswufZSJSMfWqVF7YcwLF479qkhNSiN14rhUpDVJw5P5YxY6PDDWaxqNHZcaWybbAaNye",
  "key13": "3e7cDt6RnvyQqpXox51ZmZwTyAi1Zaeey71auZLtJw7qYd3Mt3Jz8GRgDnt4QvH1JF2PFbub3wTGPtg1dxnZwi8w",
  "key14": "4E4unyjsuPRTCnw1mPs66k8X3YptGUsjndfGSYiXNHBgnMtrrbMMMRYx9xoHbSrXhnjwjK7jwTMcA3zhLHAg91kP",
  "key15": "4ycJPVkSoDDxE6hyAaVXBFefyf1GrZGZY3eSqmbmoc6gxNpM5RLjcLgHhv1TFJbyWTfdr8GefMVWk2dUeXkBVKbW",
  "key16": "41B59KsdHty1b3CoHachxqrhA9LPrK9gpfv9ZS4zPeQWYGkMaWsHFmHyvMLGYizSBFXrH7svDt9CbSCsCY34zT71",
  "key17": "2sipvaXhHH45MKVN9mNVW6JyMxApGWCfKMbVMzB7opMVDjq5jE9spCoomgH2ZEBNF9poQwSrEEK3dK1yKGN9YtMj",
  "key18": "5ZCTZsG56evSdXPxTd2wZhWfgb8xELBGZ8VEewX6QXcDmByHCEEP78K99nbAgnQbPqhDE3n8zWYVQL2VZsiuki1W",
  "key19": "eeNHemH5pMwmDCFCUkAPZDaW3WNDJbM7oEJ95ZFHUE16gPuTPdDszjpJMgQXqVQgd1D68n5ShGiPQPrUSWnLCpB",
  "key20": "bGVFZbA2tCPYzf6aS9LSFHFUY4NeN1KwEw26QGexMgSs7NWcHYonUpp93rm5VZobfvc5oDBKeLZBa2vTAGTeceo",
  "key21": "4oo53yhvQqBSRUf2ujZjh482Fd6STxNVCyhpEgnuViqa6adKVEAqxvomSchxhAPzptWxwqKo7CFvCwuia2KwcxYU",
  "key22": "5U2PsWps2dCPQEFYVpjAPmfto1wc4ykEbeCd8bhWWzcUnP7yAHgpzwG4s73UY3oFF1Fnf4B43WQ94HMCCq5nmmoR",
  "key23": "3zPZkMaoR2m8n8gaCZVcpcXZBkjxkR7TBHaM5fCM12ZaD1WjxLK5jsJcBGBM5SyjK89oSzKks9mFJfFBbC5Qhynu",
  "key24": "58TTXQDnNTGvyBoKiTg4FahkUCjQj1YPeQt2Zz95zjMEp2J62LK2Nz7T19i37LbvXrzkndDw42xuzbAjjKuR2iGa",
  "key25": "4Ln8h9aRTSKFDZQmEG6Mivz4TcqNAmziFcXXk26xC4PbWamVsjBAaUsKeJ5X12rA7uwEfJ5fB69LAV5mKEsaEaWj",
  "key26": "5SzdWDsy9gMk5A6hgQ5mr2dW8n3ebuX5izQeSvLVRMYZ55fZMFKHr9TVkYcBhRey3qGHWPpU8fZcpXkcA1W45FtJ",
  "key27": "5dZsRnArrH1kK5YDsBnJ98pZ8LwCbexouFrtiRxakEVFeBqDY6Zr22p5ymzdDxBJDXTczPpvrYkZA4nFCE7Qe2ek",
  "key28": "2d82uzwv5nqcvyYKGa96QwSa8H2B2m1D6w7zUv5WydGZtVujPjGoCZH2MMAKxY5i2ioYtqHTcWt2zWuNXVddAsia",
  "key29": "64yMkYqv8VSzvpbu7vqBc1moKbKMP6Er8qkvfAN1NgYMf3Nxt5dE1xprmrxqfBVahk1WdXjJcCYQLYZZe18cgYV7",
  "key30": "37T18ZEuTRduYE6bEK9fu1ZuvV7HDa4uS68zLqghMJaRmqCxxpUwoh4AiWJKtZPTZG5V8pVTSCBv1m5ZqWQ9tWct",
  "key31": "4o31xKdMrqh6ogQC1BzScBnexn49AaBGGk3cEV4thBgpy9GqjiJcTBvEThD3YjkEcMm5dxCVoWyy7JWosbJGsT9Q"
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
