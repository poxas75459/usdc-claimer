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
    "2caoXfufqG2cVnSDv4PQHppPYVXSG5EyrqGELVioAV4fS4RW2jaWLkboFStrTfYikQgv3MGNvxv69hpqAq5zJYqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iiPXRaMFAitRecAppBfeqFZgepZwrcSaVnC4qjp5GJQ2KT7uh7yKDj6TXGNM4ymPtit3fLZiA9cGPVLgXiX3Sow",
  "key1": "AZ9TgTcJNmfEWKwVA4jBJGMEQsbRn9Cg4ydDT4BLXy2MtVsA2GEwSrzUkhC3Gn4pc1C16MrMSrgnjNVHT3FhKkz",
  "key2": "52DUVTpCYSL47q8wDRcTp9dvBemD2Bu4gsV9V2nmxare1TSafGg2W588qZe9rW7q8Mh3vaAUT47BzFjCmw2rTtS9",
  "key3": "2w6vQnCgQMEeZsP5HdZADPB6kwnzMwWtFuPhv9UTLws3FUdVpToQgzCj4fNWs9uvcYzx8Lyf6fRRTULTzgvx3BSa",
  "key4": "3F2DH8SbA6L97wh9CVf51Ki8cL44xAuxodUnZZzmMqXeUQ3Y7XQawmyW3wpQbo8sXHeN1fexpCVVcha1Ze24KaPM",
  "key5": "2jBLZWSAeEZn3HDfyKREzwFYAngqS7vbFbtgveVkwaDRx1wKWKrcBnEykW2QtEo1FQg9pw3H2wcz2BRtoAJrFint",
  "key6": "3TkdDbYMQ46Yvnh1roFCmBSeH52eUm6sEn9zTEnTsQkqCeNUReZvPatZ3yBna4R9JcAUJQTPVJ8Pnwsh6e16BVUi",
  "key7": "4tn69WQsjtYtSJBh3WPsaG3a69E5oG3m2EBseRgdYEVz3icJfFPK5wEnBDP2T4tcvWWiu6h94vvdBkcVyDhPGBTn",
  "key8": "5huwyt7YBWD3dQRsHVYq9v4omY1tsXQD5tPm3ozxpfAasZHB2AKLBgbHfaWzEifAhUcq11frFpqWqAMMVGfqTViV",
  "key9": "2yQPxHHHVGHE7LCVXRFtURHqHSFvuJnNm5qCMLfU9S6aDooEVnNBboM5ntFtHMqyvgN4VgrCqkkn6k5HqgCLFFyv",
  "key10": "3VLtBC2DJmoYkHCpKhUUrUqz4kBVExSEowkzwzRvLCN4TdKH4od7pyicUPcHPkGaKjsiRv9Rz39qpMJcYzjzgXqb",
  "key11": "2Z57YwSkjHGPJSPUDTAfnR3WAyoNHBbiStzz414ewU3QhxANkvBzPG88rQJQyWpEe3D6yh7ttjTVe7DnUijGTJF9",
  "key12": "Tvj6Bfo8zBi13N8gaatTeeYW5bXunX9HNooNr8XCxKp5PXcxpWyknvpsgbheciiSkfVvQvjDzA6bAD6CdZxJsRp",
  "key13": "3wsegZt1KgagAt9gcCXeehHu1jEGCMr6JVYhDarCBa5b1GRhNkibG5rUNhsXRJydBwSZzntCrBhEembfzzF2vPzU",
  "key14": "2o7A5mkHwYJefiy2PMDzHWRSyLFAk1CfoXBVqXv9A8mMVmk7pW4uGGYiQUQamr46yotLndx1FP857e2XTE5QrVn",
  "key15": "5rFJciNgZN9fL6qd8d2phgfDXKifpbDcyZpDJSe4R8TnSt9USKyg76nvsKYM39KDFzjXbaE1cboUEcPTu9GiWUN",
  "key16": "3iLwr22mvGBJvPxknWndRmACgNiv7PBTVT5CSLmjTcxSmPh5ssexhhen2qxBtuYbTzrqTkK1FfHMRm2FetG9BZ1p",
  "key17": "4GroRr3snoAJ6EurvnS3Hm5fFHZFXKcGAY2fKfEWjivjU6Z4LcrscNBQkjaQQ1mue375Xi8qot9YsV1arYyeVXzQ",
  "key18": "26c3BagRoA35dahrPFEJc6kdgJgDY5FA5xaSw9VZcsjUqskQa1vHzVD1F9EdQ6bqDNzSEFE7wAN31p5HpnZaWnwc",
  "key19": "bTEqcVxQHqB2LCv52QyP7hxE4GFdzz8yZkbZ69peVPnmNyrAm7ykpoRJAG3kg7Mgzi8qbxggas6JAXq5Pkype7V",
  "key20": "4tnNN6ZGuUN4tRTPhnGkDtddvYJk7hbHnDKK2rwsti9tjuF1ZFZmabRLJjvamGz39UnqzjWyhr61i8BYjj9rxaKx",
  "key21": "4pF1Z38WyoB2eJAa2ZiGZHCPUHdnAKMPDrv7nUdH3PFH2d3b7tWaHTEpVAutu6varf6xrfnYNQ5pewU9DyeV7trm",
  "key22": "3HKwBYAmPvibhZUWUVTuXzcGLTrtJNThruZRoSh89rFV17jTM6HgudUzu2YuAUxyTvKVvxSjXGVkxsPTd5M71ea1",
  "key23": "5HhgaY7mejXRVUbikuaGBfhUANCv1ynfi2y9xH77YD4MAaGFqNRG7hjEb5uNNFFxHdr9nQfq47ZXK8gJ6QXQdhcx",
  "key24": "3QWtVze4k96Et38i6C5hanbAKnRzZJJ46GW5HFgx6euuJH7Sy6A72NST4fRpxmMDvtsM8yPff7J89T63kL3zUBTw",
  "key25": "3y3ADTRHTdpPNFUpWJcB1vsJ454VM1rY73GNPwdB7hM9P23xovLnrBLw2SpkDRGN2wzKJVDDNAnqMg92iVfynphE",
  "key26": "4fBcXveJh4E7GS2Va9oYCfEkh6eAGpNXtMnCUNG64S69TiWot9HUPBxZFGPScXC3qTwbfZzxXw1JgurUhAhYRnJD",
  "key27": "22fKaAWwY4PEmFgTurHoKZeEGAfPnY8amNDbhJYpURqF7r8NarSaNBQLmhBBEeXPGz3jFa8LQ6XGRGA9syxBzU6u",
  "key28": "RqGB6okUV8vHKyfT9SMmZGiE2mQis3F4XqhKzrGAVisQDZBViM4ZAMLXUFt8dANmW7mSXeNEcpRngeUDmBzy5NW",
  "key29": "2RAcoddSfuov8HwkV14Nbvko1URNvJeJDwHEhd5hYj64tcB2e5rpeVP5vBFBnVjJ4GP5nFeARJ1p6CfoEm67kuQZ",
  "key30": "4GQ5fbPTVT4ZJWVsNyWJdTRtvx6mk1Vx9V5CtDEf4SDKes3a8QcdNFvS9kB8rvJpva61hHLL8a34Stzd1XyJHNYB",
  "key31": "23LcK1mmTEU3mhiqm2ygVJxMBZupUrLcUHuQPfC9hM8ZnfPVMvehyYjw6p58A2FPqGTfdxejtmgeM1gwgDBskmvc",
  "key32": "5DW75yc38EM6SL6QfNPvfFb2yTzgjbXseUET4kL38r9JRrj2HC52ZbJXUwfsQJr9fe4tLaVy94JbbDdGKcZgP7W",
  "key33": "5G2nHEFyaDJFFXFVtj7XDqpKJYnPSRbjBK52E5LKoTkTV5bgXUvDXAiecZHrKtZBKRHHKy3AxMczanvMBvQYsHqm",
  "key34": "4HxHBZfHbDfKBQHAndVfHJJ1vnUq2sEdDHwswFFNsMr6t4ZwsF4sFRMWV6541Hs1nW4BD7b2THH278BPeETNjYtR",
  "key35": "uGsfBHxMu7uHde6QDDPQuMndo9pQ3TEJL5Uo6yAshkgg2MyAzqi8QmhLYQG2dyPdHsS2UBpdkt6DDoaRLayzdbi",
  "key36": "5akVXZ5HUFmjj4ivg4y7v7GewMJAVg8yTEcRXkkBYh74SGYJXUJCM2PzjmuztsZH2izFuBXEqwHZRzxPKnmo92vv",
  "key37": "5aAv9X1uNvucJGkFRcFj2WESc4E8RAjja5Lx6sFwbrLEtnjzf3h1iMNPEKdS6owRnkQ7wdzKgrmPSszhUwSc3Maf",
  "key38": "u8YcjSL2ks2MWXS4R8DtjFdSX4MUfWLzcE5vmHar3QkNWgRdbfSgfionhVeF867pMmRiW22c5C8BNnn1W5MP5Sf",
  "key39": "5APT5g8CQ1hwPLjFBkB3TrzzvfeFnMnDGmWYoAdfmg5UYMV3qGBgA6pF8rEk7zPGeFJUaCd6dAh1YKGyixAJpXvh",
  "key40": "4nEBkpFu2gMdrJJxfMhBD79Bfn1MXbJfeU5MFPTWcRFsZiQcN39kzN7WfenhiK3rV4mLwxcekZpZqARtcfd76c4h",
  "key41": "634xyMMAg2YzPCUj7WK6E4pYee3TAGaG7GaPxzgtcgjZHP56cMcC34h9k9Ky7N76dtNnfjc8V5oaJiDq9e55YyVH"
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
