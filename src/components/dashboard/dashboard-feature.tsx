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
    "3Y33tAwrt6zxkDCanrJqS2fmcsSfJbxp4uUbaujn7onpKD5EkwKbf95wgqX9VxPCynzfVtEwqetoNbCmpLDRNtMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HB3Zj7qVB1SDkro6at7EgaNUeAkxck636acSDKjApkJuQPiUeEiNS7LCttDtfGNUWjJ4Gxt9WbKK3PoEyHUT3ea",
  "key1": "3EDbsc5kLY1JrFfXJgXbuUnj15MXBT724zoj7PeSZTrrzt6XbsK8W3CYrJUK7vR7e82vEbX2t7aayxj83McXK1TM",
  "key2": "2A88CRXe5ip1TBcQX7rqqQsBLby75nYnN6ZjmZ3zWEksWWSHuLaQtkMxJiTsgvxTxHnfe9ZNfnaX31peQkH7Pti3",
  "key3": "UTUXPJ2s13ShLkE3b4KujHFfYPraFb9cumSXYZy9xT4y6NPA4XcmfdFs2acA7yVKqkHWwpKFsuNCoMvBn7qx7kA",
  "key4": "5LvzRnkemgKMB7szHmxAKudPf8t7SeX58WcV4ys7Us7DHjq5TEQ4hDSX4y6ebwhacF64od14qvbsKDNKDEh3TZK3",
  "key5": "26sFkunqHmFE4gEggyhi118RK9FX4yRKwAd4X8q9Q8Ai9gEkggBpgndq2KDeeZmYvcbHLTSp4nxF9T2bZE57xP2Q",
  "key6": "5bNbuHKd3KBUiw41Yno1MmdmptR8FXEKKswZiAABT2BQ2AYdjtSpBteH2ch8QzwvNzTEgEM14AehRzXegG9La3Da",
  "key7": "3E5hdW6JzyttGnTkL2ogk6fGM6TSfPTsGK5fkRkmnaBdZJ5C7MRSKfPxoVKUQfNvEci7ybxqvMKixCaJXQdzCfoE",
  "key8": "2brnvdWtdqNvMHeX4MFpSDdwExEqhX2dvkfL8vzgg8JtUJyDhkE9YUxZg4qBZFA9qGmFLVrPn2mzmEr5wqPjedKL",
  "key9": "5mHdw1PuLLQ4VYBKuRuFnNSkFpY8536gALAXJHvEZu4CyZBTVNhGA2QhUBTcUFqtvFeFXdpxmVAqGrk7sB54jXHF",
  "key10": "3jvnDsvMUfmRFDyTX86L9gE7wbm96xMrcachjbczCuSWvuVmernVoAbjxb4x8iqxB6s8e8Bo1EFPZCjcewnEdVyo",
  "key11": "3ShFwNVLtd8mQhNEwJ4dH68vqJ5VMPNSGmpUHryoiEhbmB4v5THRhgvCdhbgnVi9sZmbQKGdm37dYKxS5a3RVbXM",
  "key12": "4ZSQpJPJ9716rim6MQWERy8yQCisC54eMsg9fFXZjdgPmcdfJxaknA7aQG7JVvPeCANemHgJ4jPDcUf9YhJmhTGZ",
  "key13": "45Y433suQ9rVyR9pvtd7Cy4GaE3AUe3uf2GrjL3K3qjPnW5YDaGHau5XfXaYDyoHat4drDhpnUL2bLzxKT1iwEEX",
  "key14": "35VMcJPwSxBKeRCQBJyNGz4rMCcqFWWkn6KhZ6u67QikXaymJLN1CRaaMdxMXwSjzoDVhZhBJXu3W1oD5fCc7Wy9",
  "key15": "TCvoV8YJ1uCiNZmt8794S9zqqSGYTrQ61jJ7JG8sCbwygRJyQpR5i35ZxvM8zTw6VKpLXXafJCA6ypJce1KVptD",
  "key16": "55E7ioWuCeuVrM4yHKRrQ8jhGfC9x4qm9EFQ9VepZHVg1tJTknKPWTJF27L9ZHCWCvMTv2Fh6FRBBeTnZi1DAeZr",
  "key17": "5wg7MsWCyqLof13G3RMETbLgJ25rPqgWX68DUHFdQnzaVNkrUaajtxDhUZd88Y8SPwZFZFxKA7cXktKrjWME1GnV",
  "key18": "55Bym6Ke7beschWEx1XQwLj4Gc5FmewFsFYTbpW5Tq3wsWFUpTFDD88nuYeBzGmQoY6vowa6h1WWMuBoXSPsDhZK",
  "key19": "3nXqvj2hGmCRketbq5YNCEQHowpQPsej5uVYEbE5pYKPJH2cP1E1AdUqCHrAH14cod8UJ1diVH1KFTGSkMhXqa5H",
  "key20": "p4b2mJbEjVbCj54gVY2uJ2Pi3X7tR7cCRXNhC5c4pre1URn5Barp99f4SCSgLP4rRGCKYPc31Za8LA9Sa6W9LKh",
  "key21": "5XiUQxf36R12xTbaYt7LvcqYRb2Rq1tdCvc4tDgvLspocypgs4ccZ16EqwhUBGmVPYc1N8bdxZqic9c2SWYPy927",
  "key22": "3tgeHENCURLk1c4AZT6vU1aWNDmVBVJwSGvSPTzqH9u7xoSWCLV4sD9bssx6BWF1cKA7AbyUFcuwJtDbNdV1brjE",
  "key23": "5RmiBzGygN2kVtwKk8JNBMTBkDrTe5DFSjnh8yjpeoefatWbLCEx3eHup3p52AAtHrDajuXjRmrbMjmJLiewJgo9",
  "key24": "3x7utwr3Wi6MtZgRByZkdEzWQu98U3gmr3kt1kz9mVnk7LnAw2XLfSQnb8EpphsHWmdDo8Q7u9YZHhy8G2GfJFFR",
  "key25": "2p8erZ68wU58F6ZyFdmCWTypeaJNprZ8q2GSxYSWgQQZ4MW9pM1DWDzASx1zssYWqDXX1wWTeFAJpWYqUFLKMGm8",
  "key26": "5eeirgktLYfpw6gcvDcmryUuN3zv1wNgCAurh9uUCcxmi4HpciNzN7nrhx6uVyT3eG6cEu27YGhhFNauMXx55QrK",
  "key27": "NvLcEeefqji26FAbj75WPtGup5JQtbmUJe38J1xwYTchc6UNDeDi8bzK7BmbUUcAFTiTV64trDLc2zm7oUCev7i",
  "key28": "3Fd6opJanFiDrRmohQeVywiqssyACC7nBqAmvh2xkU44mwBozr7bw74szixAizdQtxP8uDy1Vow3cBaPxTZy1voF",
  "key29": "4eS8S66sgpmeXLyBY5SS3XH5hdkAXxL8UMzToLeVQTFjrf9ex9nc9VxHFUNYG3CZVV6P7noWtHvMaFsLuxRnE9pr",
  "key30": "2LEh5Hw7Pk9593zAuy4hYDyLiarst5DvtEzLiKfbbssedhpoemqcfRAB7D5fHzFuD4HZ32qY7rjfzAFqBSfVKBZi",
  "key31": "5G57PsXnVfMgp9S9zimmYNBTnDLKsaAfF8XgLGpEWQBshhxjay77xSsXWMb73VPiSuqRRJ8UoxTu4DEmCuv6sogv",
  "key32": "3rS7NrYH9153DvsCxxPmHUmNKTAPAnmcYm3nfSzDBWajdhGcE6aaLnUsEYn5qkzu3AvSyjk2nJqQHp2ezorRjXGn",
  "key33": "3n9jGqtbHkXTrWwMjPetcg7ADtGer8EvFki5c1yqvcwBFPt3WGEirYAjphuwG9nuDV5XaQUmwKovPbXx5BYdybnn",
  "key34": "3W3MQoabFBhwHfHjXrZaj5es6k3zriZx9MUCvqHrwNoG7aQGVizm2UxrtBEDPjzTC4QsnneAhnA23ZTEsMdzwsS1",
  "key35": "5mbpRyeiAc1qK4sgcbg3KVGSSKrft2C5ezD9YyzT5f8XdCD1wnLGonKcSG3pZbNdtgjMp7Y59jQVpFGp8i6jJDYj",
  "key36": "2UVShrztW8DSxnw3Ehqci47s67E3szJBBkETXBh2tKkvU1f5j8sfEh4kYanVkvQVZGTF86cMuggU86wo2f7m8Ndz",
  "key37": "5n6ZTLghi1Hv8ra8htoUYw9Hjef1EgXo4QWGExwCp2VyCG9MsRznBaFYX9N44i5Btvumk5HetWa4h5G5TerCXvBV",
  "key38": "33ohSsHk27C8y1Fk2Kxx5woqyNp437os8JYpber1fUryqcb1TquaugyEgKvKReGV8ozEGmRM6wJdd9zwQZWGugsK",
  "key39": "5EkoW2M5AMrpx11B3Q8pawWc3puCWsaUg7JHAAuK3D63xbzo4hQczd28cko3aBev9Ma2rED3tVbCgnHjSCUnWZrJ",
  "key40": "5sq7rGmUYpWmSXq8fuQwynTAEyU1jeQ87VLX4sLbyxqtZhYCAnFMscW1SxkLYSuNnCN6mk3sMG4kJDqyc1bPDLDV",
  "key41": "3m6jYSb62NWb7ha4bsd3WJPU4sp3MHS67EcwKpMzPS9gqUYT1teQMuaG2uYR7vXifxEWSGPBKMBGkfaZ4q3cTA29",
  "key42": "2dM2HQ1kVjT29zratFXj2xNZZu75KnyB5WL2byZ87HoifPDa1a5pfBcf6Ps7EVTt5273EVwT5C3WVxjsbiXkvYbT"
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
