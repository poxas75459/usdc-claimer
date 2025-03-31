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
    "4CfLqWpeQr7Gw6jskj1znkSJZzX7wZiBMG45kf8vNi4hS7okJQk59umGAmSzGPkU6N5ynZjqPYsivr5KygZaGnro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k4v3WG6bQUjXtcVSCLpmPnTZJWYEmrxv4xe3RJgiwU19qKVMUA8W3zyr2AKSPqrNzNFsc6Ra4sY7RL4vmFUdMzt",
  "key1": "4s7E41XLbMTaCZjcuRbcGMjMJ3eqpQupvkPmLLgoNnEmdFbfB3uEdfbSmxgXSSNkJMkQfSJt9Gt453BJVZwnkvy5",
  "key2": "2rcGquGqs5JB43A8AEKm5r8cr2DRGL2KKWxJweMKUNpaRrQhn59unZUk3JogKLySn8Sq7BpHgT6vX54kzgeWvZkd",
  "key3": "3SjRGWZt7UfU5FbRftht3hENxv1StmDYyqxFCL6UXvQc1mnVfPavnyzhkV2HBYSLGHWqb7rawFR9vdbRaP7rp5cf",
  "key4": "zRYdQyLuzDxYgLbqAwQLvNiiyJc4KyATtKZVnunG9uozn4ZihmCgcnSpoymeNfLDW67Nbm4fuaa7txwefqjV9Ub",
  "key5": "2qCQUYdxQv4VJgYthKAgPTwKuuBkgee1VdRQa57Z8F1xH9xAPYDLyTMtBrwgu2yo2JWpuQ4h8qGk6rTZPsEnzqpW",
  "key6": "3ucqg3dFjtjsb5Kpwt4FxkMyUNQxq6QhPuSam8SB5CqmkUSnBvaB5ZefeZp3upj6dnhDQNp1aEBGEJb7Xu76a9kp",
  "key7": "5PQB9HcZcowChLBPtr3j74ThC5T1Q7cs87oYfiArXviERpuYifPexfudLNRBXApUGxXLnMihEfqhTQW9HR8qyXva",
  "key8": "4u1kRkyVVXAHRRPXkm8DZecfo63YKGNCheLw9pyEMQdjYtzm3hZsoS5DVcqkGrJAz15JbciyshHa9MrFx7S8pBiJ",
  "key9": "3tmnkvFPdfhtPZNCHSPozr1TP5tuymgwgm92Vju5wuENbafobft8GP6x1j9L2QPVHVSGFUvMkqBeq4HivKcHGVqS",
  "key10": "5ajQRnM4RGc8tgoocGcB1FGsK3N9xtNybP4rT8zNYrzAJzbSRN4moL6E3S4v9wrVxKUGvtLJVNiuUVt59VW1c7gB",
  "key11": "2XNrN8RMSQ7skRacuXmWPNXQJZ8a9xRuGu2DGUEYPxGXSWR1gkL4KQJWhf2X22Ce7tUMpNJuZLfqPxFfsYviv6kR",
  "key12": "4opUGS2B2pDxmmsQHwtNz97DG13BXzNA3htAV6fgefkNoAtrtsx8sUd9XAZgVP5SppZP7q7PksmtsHBQKqJ6kp6r",
  "key13": "2aZ9PLdUA2B2YJcrNWqHCvfDQ7BUMpxUhynaAYLWp2yH5iLLekBJ3Z8sdu2Ps8TKGW249FyFqavqLD1DFzPoav8x",
  "key14": "AZGCC7JsG6WDd4v1NeynJisHqszr6MSZRQ73T4ttUFw1NT1HWw2YnPggNZ4oGf6JzH3fhm7TggJRxNaSv5sNw3s",
  "key15": "mtTZcWaXPgwLiBnj8UoB3NCPb6Rr1xMatxK5QdVoeHVeXrmmzEhFsz3mrMo7jKzcTUeckoZqyvxZtYZJaKxfWXR",
  "key16": "5pRevwCH8WfnpjwJYk3AWfLJeZLVEmucAyUAQR7Hv8pLctgQHPECzHhxkkeX6PkaFZMAyXJYW27KQjeHRG8cSPK6",
  "key17": "2L6Fg4TtDZjNbrJvigbxzEBUWu9m52vsjYxnABUahSBwMxjnH96SgBwcXHDvKbYZhVTFi1DpoD89bbNgmk3UNQVb",
  "key18": "4t4UJbgq4DoyRq5vCQY3pYgo8WzT7gZypfyEcX6L54GXPTsP9oK58HzwkbDrVowhouMNrTqzDhc1XzpBb7SNw7rU",
  "key19": "2ySwnKMfLNJdchMwAFPhoCPGVYjE4XdrdnmSge1UnvSV9pCuwJHLqLhgCXFnSqkjcSnDiRm44KZSRSQuF7iqYGjV",
  "key20": "43vRskEjuxKh5MyCbedXkKm6SkF1PXpg3CnVYhniJVXQrwij6fL5ezwd4ufPtACXnJpMgnsHpHjumvyRcR1pnH4q",
  "key21": "2U11yyde32DW9xdxWG5DYiVY2YUYUtHyDzhZAEQAjnpKA1S4DwttFKaVpshKh9v4FzcMDFyCt2NhSLgVfYqg5HhD",
  "key22": "2CHHxqhSBungMNXF5AwpSLkGLso1VSWWe2Kk1XzwqG2ESK8pgq2tSNBPYMXDqvzRyy4Q7sp2Tjn1CAwfDpRJq1yw",
  "key23": "2WWrARAd8MChNmjuF6asSwvhHyxbqCqdkLby9eCez33NSovrXMYDvduEuU8quujQkq9mc9qkhPeCeYB9NugBeE1o",
  "key24": "3sx56yAW5PKG2Hm7NgmxmHLLdV6AShSnAMZM2aopAMtSXRXBAkN9W3MxgQqJeSu8tVmU4zNGjw44QQ4WiDo8E1Da",
  "key25": "EfyW5EZ6ks9YzXViKiPda5dvVeitxD119921b8KZyyehRcjGba9DYDeLLhenGrjWng7bEnCJcvjRqbnCv5XNyWq",
  "key26": "2ycVN6KzLzXCGgmZ5XFmMUQWkwWMnpxtgHSkQ2V3JJ8JgfuvsHpkXEDroEiSRp1sNbKgjBqTiq8dRpWEzSXwD7ZD",
  "key27": "5QqSBy8vm6RQKcaSWfC8M8HpRek7cotiYnTNLq8rNC1jXEa8iWAPP1R8GuKLw4y695itjuHJ2vwqERMKWS4JFrXU",
  "key28": "4ZduReFv31iu9knGaBzCB78iYXCRgMHMuom6D15SDYJrtdJLnvTqnSYAjDctGyo7DZtTkfi3JRq1gcZAsy1ja2Wz"
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
