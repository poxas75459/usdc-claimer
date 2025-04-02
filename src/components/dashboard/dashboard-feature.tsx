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
    "4QuViC9Ak5tzzNbe2koVm7mXfpQgWiNdKuurYwah8t9XbUDnD9dCFCQsj96TUqu2H672HYJwDvEyBK3R8ammzeJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TnRupamueHMvwbLPMi9doZ2K23k9EMeLKV8HLxkGv6vjFXxN8eRJhEgFYsnyTgnjT4wzbJoM5adqbLz2xvqHMP3",
  "key1": "AF4UzeVBCVz4peqJkSN3k9o98BYx8DJSW4gbUbVPM6mnhDMp4f3zQ4yq1DjWBF4L7YrccQQhtpJqjyX1WFQpSB2",
  "key2": "Xp69oEgvcz5q7Yc6CTMpMsXEdWQ3bi19VFhSaP6gyfrVtwW4LpLLWHnWTaBRnfSYmoJwjUT8yghFzEEDrMfZKEk",
  "key3": "5DPV9GP3jP7doaM8N3Hqg9sZzYmNKZQACNDVB9aMbzfhSaEbTnsggaLToUPDrA97tUGsdUfgAvdub3kWVqN5tK1S",
  "key4": "2aoP4QHwzSqh48ubhkmdaLPRWxSMTXjYtbajfk8J7CEviZ2S7ZPYoCEq9q21r1ApbqHifE8JepxRgyPKzeKHvBEH",
  "key5": "358v4MXQXyMNHzdXpkeCZXw6fTSowvsvknaVeyM4UxgEH33W1P5pS1h1BheUqkCru4GujPyEGqF3XzYme2CUWt6w",
  "key6": "X2pGfx6LDTj4AFGNP7o8Zktc8pVbYaqUbRX564cbktFPTqQAyqa5LTuhERkN1UkY9dSkQQdBxrGNKoFkvJ537XY",
  "key7": "4593Lfr3VYmJMsvJWfViAw6Yir7VWHdqg3mDVJvxWUEc3FeCejZMWUuXHhkgTpPYUnjp7xPeQNfxDNX13K2QsXjc",
  "key8": "5Tuu41AP4xUqqzgfajPnfJUxhpA3J14KR2kRSU8itnrUueHPNjhn51bwgHFWt8x24oKKb4p8skb9iM25QZ69Quoi",
  "key9": "5AxUg6hfzh1J55HnogGbNjAgSuxn7qXJh66WhJ9EdkuoPq1wAYMnwkijDMb3nGMN1HASnMAK4A1TGiWoa1jhx6rL",
  "key10": "4BmzD3PQQKzMmZiLLCj42fTxm4m8Ub7HUzRgbFLdhgUArUyhS6fZcqUCs6v4xKUnaz8ENAV79i6eAi7uxhepo85r",
  "key11": "5Em6RUP2vAkE5QxAVBY5yW79kWxUk23YXWrQKNehGfRbVSupY6aAQCr1AZPRmSgYmJiuh9b5p9dkrrUo78NW3Dhk",
  "key12": "27aPf2vVg3C6EYhWK37RdpaefmHBfDdjAEBBWJQjWfcNyPxFesQv7rkfCM2jweKhnYzB5kcwFiSBefws3C8D5ZNB",
  "key13": "2aSazscdQyvcCMnCL64Y4JfC4WGBcU1v5AqBY3CQnDTgY9KKegojcc7atihPqvpgz83hMa4BVe5Jj5T17zWtiro1",
  "key14": "5y3WsUZby1fZdbF4uGg4aV4bZfkqR1GetZHgR3dvnJAr8Zc5KqEkJQZXEui269HYP1cLpGwc4egJmR96teYJggg1",
  "key15": "4iYweSUxpEVTWvE88o4tmt7AovkNV28LtRVaG4q4oppVx8A4tvUye2PhYpdVWBj5C8MkufLpEZ3aghjpQCWe6jPB",
  "key16": "33FYtGjt6i2SzmGq8DhVvyT9CxKwzAo7o35zyDG5PPa6JLd8dHwMwvJ9CCQ2evFZYCFNyaLxdCe6kwTjftKDnRyT",
  "key17": "s4nEwGtG6ChgjsFU1C9a1WKgQJYq7bFAEeoycrH6P7kPGnFWyuqYcjrBtqWDigJP6VF49oFCFNVfA4sjeoQDbwE",
  "key18": "3cJWw6Dx9m7Sd9J9YvfS42Yw4atjrvBkUp3gBj9NTjtvi2WgEkLyCH8nZ62KNq4bHYezJNzmTxX96wfvxp9Z7cFz",
  "key19": "4ecx7JTc4qUfbgs1ioazRi9DLkJbUB1qFn3XvpXmkEoRM9dKHjNbCDWRjGVGQd5A22M7Di7kEaqWRKiaeJGhpL8Z",
  "key20": "3cucVRdj8wdL3ouqXdDJKzmzVpvNWGoSrkJK1qFsujfqy2s8f3vFqwbbYxSRvv4VrJgrU9ERk4bsHfDomFm2i3DU",
  "key21": "527utFGLCUpRbueqUTtuj8z4k4qajRqFuygKqh7MQoRBCmwJXKrpdYbKQHKfC1ZTjb4CiBPZR1fqbM8GSnikp9Ai",
  "key22": "2nSRU1bFrrVWmhY8NbVmGsBhd7XFnF3CwGd8fgoLkQgzD9ur16ERBRvmx8v7eAtyAaRBQCPgNU7pmvMdfQiCdELz",
  "key23": "3trMzQTnXaVrg2SasXC6Asvi5JpGv4nUWdTCZVKgdiAz3vCgYvn2oQTjUcL4FUkhbnjkEFTx3746UCE1oL166rMB",
  "key24": "5QzZMDvYC1yuxrbWKut1mM1MFACb8mGnpjEJAwevaRbWvSnLRbbf1GshuuEcUgxEc2rQBWc9xsxz5h6do2L9NsHP",
  "key25": "48Wfg7V5ic6kVzrghuhUvscDp7C3soWU5LKup9b11pZRmZ4iYE4mePSZ76M3Z2ngoVquKD1ZWN98JSKj4VEBT5GD",
  "key26": "2YwnPWuMEGxDFnybDDSjwzDcF7zeV7R6ynuNeRpFBeHv7kesckAqDP3jgLUi81wrKXm3mCjm3wKfYvP3DHjyyfD9",
  "key27": "5gL1DziGkoYW4uQoeVYujeRgtK1JcwGe5QgjQunRV3y7aFfZXsuWcSVUsxFyZrNNutaodXfTi6RTSi1pkjc13VxW",
  "key28": "4X3UgTBNsFZBLuQAPZHD8LNdaaaforj5Cd2RZBSRXv5s2N1Sj7rFFe2bvht8RiFWaNChgZmELtNLAeA7rZwx59cA",
  "key29": "3R4FuUbpSi2S5Wo3KnL2ottSBLDs9pRoAURhVnb6MyjmvuNvtgdWXx5Pazmbb8kmwpfQJhMNNcB8y7xRxaqXMp3J"
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
