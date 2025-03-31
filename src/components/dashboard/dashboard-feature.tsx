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
    "2w5rLe7ECUsQ1VXeEYrFKLtcfk5qkYmUp6x6oW1r1wsxRVfJqugrvvNTbNhEfRgP8EwkREGTCF5C8dURz3suPb2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67AZDjouyKe24EGV16MzELSKbvTXVctxmJ4pyJoeNDc9LSFsd63GRgDos2NJtFykkkpzvPpHkCvCFQsxMNTij9VC",
  "key1": "5FkUM6JTvutzRpX9ixdrhVuweeoc7jzwFNagUM1HP3StjZKodcPvsRxaqbdfuzwLy8oCvki7cesE4CcsRzb3irka",
  "key2": "d1cxvTgD8uwtcFavCUNygrqq13RQ3kUyGXrDuG1wof58KYBBWTE9v78FincKQYsX2EQ46CyR15r6FeUoPnmxMRx",
  "key3": "3jt3M9jviXGAhBwNPF53pw9eMZ3yQVU77xaJsEAFMnZGruWDaczS8vvHKJpZ64jjT3jFQUnBbktncH2NUsMUkGvS",
  "key4": "FC6czwhfyG72HkNspDH5dvsUVXp5ZuB64AYNd11DsmPpFhPsc7mYQTfJ9ooCTrMiiDy3Rt7aVfEDQNfc1gYboTz",
  "key5": "4apjm4VwxaszMfJQFBpmDEzvwijTX8Cdo76mDHfBFXJhqPPNZhiaDnENTx9yBuCNSKMRGk2MKEexvLU9ZdiQEWfU",
  "key6": "UqamRKAuScj2NAasokkx7uar169vDpi14jiJEuZfu4dZeEEtptRw7kdkRB9VxmykjDdmbwqL5V1sW9AeAhwnVrB",
  "key7": "5kqkxdzL3ar8TB4dV5LQdRz16f4hjDNeSP3ybvcjt1VC9VWKSJbVQ9nWCs29YNNSXXaxvkFAeKYPZchQR1HtDt1Z",
  "key8": "33u5wxHT53Rgo7pD25EbQes7xKBfgh92vRVcwgeMYkpEEfDsEe36RSnWSgCJTm1UiRFPKMwpzvtPyai9re7voAkg",
  "key9": "DmeZ1MoDsQh7bau5SixpRrMMS3w3H6XUmq33zqiZRLRo2YHSpvHetwnf7W1gCYYG64QjnwkzUyCaDCaZ36WjmHr",
  "key10": "xogFRN98UGYxjMpHumX8aa4orjrZ7VAB9jauZNHXCMFboP7VfQdsL6HFGrgwR12EPi6u3KsbUrasNrUpUZ9TNG8",
  "key11": "4cQfZ1JJthb1rwNRBEsGbonadWUFudZPPBXLULHsMLsJ2QNKxia6JFiqZo5xbpTddtKHxHEZifXFTg5Az7fgrYRQ",
  "key12": "3tDZC7GWSeUsQitw9btMhESwf3nTRvFmnF7ErDKodK3Nq88zVd8A8gvuNov9Ls7ZRPTFc4NWdNBgM5WzfJJhGZWH",
  "key13": "49JrhmrDeB5iu47zHwKhMcL9YWniKxvNu9AJzEcwkpRhmWJEuvSf32idFsL4VJ7aLb9n3dBB7CQPm1MxQB1WCV1q",
  "key14": "5K2GHNYRHEgDkLgj9cqpfXoMeRNRF9pHGvaU79GazGdMPQ6mryazAMxrNtBqknmePMFYGKmEk3SHxpV5NKfecHDD",
  "key15": "2FCPjLBQRvWJtGDTumJmuFTpZ66ZH37cSKNSneQgqbKnnkLkcaVztrTcNx94wBZY7fN8wQZVZ5a262PqaUZ8tf3Q",
  "key16": "4cZzPvx5sM5f7snyhoAVEaticrhYTnkQyCG29T1g1dQUrvSV7EzwcawnnAtMytrHXf1UzDhqEmwjqPT3eYt1Zhw4",
  "key17": "2uBkm2Vtn7okbP56sP9L8KxM2CN64kk1vTyT7adW4iDuLcxX4DvdTw7yEGZPgmRvwfx9WXgmmSWCGAGxNcrG8p7x",
  "key18": "DJoGKua1v6KZovRkteGRxRvnPg1ah4pUup1qv3zhyVMhARnTbF1CE1sLMG4GV7s5tbfpsmy2hMAsEjAe4iH5qpd",
  "key19": "3QNc4XoFHj3S8nRdNyKm5Nk3QHd4Z1APhPHwUj9USdQvB3VbubwxebsQCK6sZQjy8qfBFWgKL6vcPVkBq6KTQDH4",
  "key20": "qNWHcjYghcxL2xKX2qB3JRvQgCtpYv4U2FH5a6Vpp9zG3aWH7GS9KpA5bpZfhRVDk13PoFutyeZmC55QN9qe1gn",
  "key21": "MXcyNwCmuU62JYsKGaTB9ucX6xiXSEactPAKAhhVGffDdJ68mXd5qXcXkNqB1A91EXtmzCyVFYv14nPL9i8dPxu",
  "key22": "4RDYYgS8FFB5YJrRNFV1oqtji7nN9beSYLfd1DtcNyqGnisD8gJzreQpvoKwGcZNyngDqzbCVQvzaaX8tRwwxa7t",
  "key23": "25ikE1Tj5iAJRnQ3YGhJhqSEwoVsCsJJdXKXMUMq57zbtR7GQ96rYauaq7CK1YjpXa7spUn4DJyKCBfVHswyn6NJ",
  "key24": "3g2cg8fEcfwCrBZxi9UogT9Vc7Dup6uDeRcm9BTfEiLQ4B1pJUFfoLMHWYg2Wridwg29LQFDGLH2b9iDnmveQXwv",
  "key25": "47pdvsRuajGu8FFGfVggnac6utRP6KZf3jyEeb3aWKKDA6cNARiTB6P9ZQ4Feg48xGVzHkiBQpC9RHNeA6Jg5p6T"
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
