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
    "5HEFstzDJ9q9XB8UKibkzH135jznvPndN1iSyJQ7YBc9mQoX8WA1L4CG1q3GuSVypPWCKievG5ERfrbuaQLd4fsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hBwCJGPzxXbTcN7UxiDv2fK9uSYNZc5iH3M7XGsfXbMzvdZkFEb53GtPeucn4TsBmJCoyxhdSKJe2i4zspHxyP4",
  "key1": "YPmrD3d29sr3xYUC9AQcZiwvAh154dFPES256ipWSj9cNnTJvoxra6F5MxCimZ5nHRAKhvJerL83sLrgPfyWN5h",
  "key2": "2b2jFxwjHxzs1Pzho5HaUkgFc3CcsbxtbY4TbcHDeGhjAHSMszNRjbPfWTPyEPHNSQQJvJkeh51WJHzVFJCRsjf",
  "key3": "3RtHPdEyJqXKxcE8H2tDmonncRPPDAoLWXqMWrjwPbTui2gFpruuj7a51cF79B3P7rMbB8PD8yLreU8SKDX1xMfj",
  "key4": "43fT3eXwHsQ21g4D8sf7XyKKhvP2dFDFP9Ad2wqBJxYEKm49DVM1NnijG1px8873K5gVHbSaW22uDRk74pWgkiqb",
  "key5": "2GuFwL9PPupmYQNj1YKQofXZjCjQVPokp4sk7t1dGFDpqm1ncRYado7K7DUVcqWz8S7X3jJrkxryEhbB2oFxu1Ea",
  "key6": "qkA1zUsPYZBGiFdPrx2dckPyVooY5Ez9Y4XJyeTPwjTQ5FDFvZ1KEHQfWGSLdbbLPQaFomSzyDXTdeyk41m893e",
  "key7": "2NunLH31fqnvpoSf752XBtn8yAoB5ueQ5tzCdMQzaMwF4nrmzAwPSbiJePCJ8fMzLrXRNt9jqnZmHVAeXgqtqmE7",
  "key8": "61AtimnvNGkS5YjBxByXaRvdRaQEbQLDVL64Y17WGQPMwsY7NGtSujGs32Hqhog4jYwo4LytLKUCasr4tveYqVHb",
  "key9": "4KhtpLJ8GSfMB5uMdr3qFABW2W34YRdX788DF827nTg8xDMyezKpvchzK6sQfFaTdXaoTEmiqbnziAHXchNxns2Z",
  "key10": "3EA8DBBKjseKaSyf9tfXP1xKChCSwFDqt57BLcmQLbY1eMhfcr8gB1SJ8QN3DmW5gQQSvCRgyHLBXRSRLxfaS5w2",
  "key11": "2eff6ab6rJ9v7AV7gM9sBRQ3quRLbyFLMt4i4KNmQKdpgLGfTJr1GJv8kMCkVNDPa23vzyBNhDEbNmJcx3Y6iktA",
  "key12": "rwmgVrmopByDFpQcEwUbtiHSEaGUT4qqqNvntttBuEEFGvWJX8EyTNm1H17YvJ9YjgqXnUFCBoCR9B1tJhBbKPD",
  "key13": "2unSiSDajNQ7WnhtJ4ybDTk8trEnbparyz9KBPwBJmRKsTmCFYoXsor8xALUwS9cDqpeFXmU2KqXWLUzen2QJMjF",
  "key14": "3iT1DzmiRdZza1RNzQKtwmE7obmo9hTKKB4kYStDPTCRNXewV4tn8UPVbBDcDHdgoMHhDuz1sfyhNFdTJXaFRqK2",
  "key15": "2sXoYYAjGfJ3dm9pNLe2VPkzY5HJ1gSvPm9ydKT6ZG4ezfANoq2ieAaTkPARDTVyB1TeUcXsBQsqrGhpmRqkRmBy",
  "key16": "2QXe5pbAVBHhnxzg25PQP4p7UF34T83F2UuspEM1h5vYGT1R2Vrwiygb14jgwX4s3ZiF84qQ9s6HbyhErbbxnhiQ",
  "key17": "27MqZ6NeNk31c62fBHbjcAE88zHMxA8t76JBVinYXkNrxLRgVy5x5J1Dvf1oSMo6Gb5iL34AqQhqMRK2rsK9udN5",
  "key18": "3CAsWFjmvuqxiKxtds8ffax3zxSg1mQydMxiBfgLiPn4cs8sRPTGzkCHquFSGPy3eK2jCPQ1fzf1GU2h9Fvd9xV8",
  "key19": "21TjitJgPZ7byL48qGL7Cwm3iZiUpzjrwYKdZasvid4VanecfNNn73W6Vz8cdvuXHSQ5Y375Zw2qsFYPB42FoiPs",
  "key20": "3FyXyRSfqGLhz9Trc4iYCNziVRAQ19hZNPzcbLM4HLdS1eayknsCrUTysbkvxymNR9D3ab4CN8Swa63iqsE1r4VA",
  "key21": "58wroyDVLHFXbRVaUzB6WFieMFMrjH2mYy33RAvEfffEyFgJ7LHBrPsGi85LvQFh6TgrQJnRkVR57S7RHphCUGmv",
  "key22": "3QMW44XzXKwbmhEtajfFVPv3SpnVZWd9EjideBSGyat5oUUbCH1u5epUUmVC8ckbQnNHzp55Ny6HUTqWw86r49Vu",
  "key23": "5C5zjyM5QeSV67Nfk19MT8kMM2z39Y1u3SWiVxUy8uLYSp6TDrHifc39yAUNbkFBV7gsxeUDMVSvu9qH2bv2qk95",
  "key24": "2dQQpoJqnbrHx15jBpJAg9BBqjkPnk1sHPDcyo29rpifjiKxDbzn3vuaaKcWipWzahK2ehdDQt4fw3RLFXwPVgVi",
  "key25": "5FBq8bmcPgQnVGhGGX6AhcBHErMjdLoJBuKzzSkCoAofiojbR6yTyRboE2RPQBZFX7sDHmVH7aHWdTJWyP4XBSJB",
  "key26": "4WXj3w7iTMWRf6Cx77wm38jkkumaVGK7WUtjzXJzSVLtZKosoaNrwXy8NJq1Kj4iKpUg9UfyEN4CJPNjVLVv6SZL",
  "key27": "5B1zyNQZMdz8yo4QFAxqNwPTbbzpUAiGRsracoT2R1onpMqn8q2h7wdPE8tN9YsQ2mJV5cgsh52xRQWkTzcKTMAo",
  "key28": "2PFWofWwggMCzAX6vpssQ4Xo75nTfahMNtWVCp8sZAFx2wXUGuCXh4yraio6bTWcRjwykqAcqifwfPYSMtujt9ZQ",
  "key29": "2j4Z1QasMexmJzYkVDVBB1uJihNBSpZ7tFGm8fG2rUdQ6nSonZ9bKeTueKHpptucF54o8waeAMkGx9WBpfdzD1BV",
  "key30": "5dZ4hNEfdEQEemMHQJ3Mn51GDfgSEshVTKTuR9RfzZWyDNaMFZ8v7CoPtXacd814mVFy3EtyCy8CaX1njctLwiGk",
  "key31": "5hneiWWHEy27zcJBBgthZTf894NtAwAtFMd66msjW5fjBuR3Mx7RmaR7CmLksFxVkv9WmfnLrpbVPhXW6MLRaS7b",
  "key32": "QcCUMLTN4TrRxAndQrp5BurfdDfVaRMRbtTw1TzFMgMyjwSsb5DyfDjcGcyoSEgMktLCxj4dLBGAAoQhTSxEjbJ",
  "key33": "ktxKJepE136penB6uGa28YLosRqK6robdneehZc6g3Xj47MquZav6GvWrARCATXVCytjfDFPVGYjMHWG7sizRiR",
  "key34": "5fursUcsLndPq6nuwLy5VkYYMtweB6Vrg2idWPBWV2Fxx3tp6WPPzGrrpXugQszrr6Z1ae95RP5jCp5yJH3qmBnM",
  "key35": "4kUwR4DuiUeGWKSTb3ctsJqxfdLr4vD5qnfWT6BQhQYgFKyrrLk5BEvscg2XbJRZoh9iHNNnXdeCKBVt4mnzWnQB",
  "key36": "ep3RooBSy3mpUADiSsq6orqQQHkUKwzGwp1bnokXXSxLByqhBucBTQKQEkUjbRt3txX88F47rgA8yq2Mv6ejbbR"
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
