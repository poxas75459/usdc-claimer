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
    "4Mw7VeydP376DeocfTpMoWc4DKzdyq8xN8A7kHXjpeshtEpbzkvN8QMVveHeJgXdL6jTeWFWic3vDoh4JwhdRn1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yXYJgY764bfNShw6yGFEMr8h6CtGwsNe9H2yf3v1pDgMye1275WnCsLm5Vtr4nxnbRJzrGzetwHBzhAXyC7ELch",
  "key1": "YsbH7ayWeg6R8dLRaBReix1eDsEtEdwaCLyfWJFfH7ZCTHJdumPyifbqeb8Kvg4RyhLzfwq3MdSNMrvwrLWRtAh",
  "key2": "34AEd6LnEx5nMavMvZwhDFMN75yco7hDaP9r27yZpEQ2SxGcvixyfd3ubVAavAbiGgKhiUpkdhLJKmAwhZ98oEny",
  "key3": "aguL2Kr7mM8xpQoTPXShWypLTq2HBzoAkwUFjiEk5nrkVo2xNv383KtXVFwXMonuTBeWmAGGcoFqNetXxdnL9Pb",
  "key4": "2TFxiiiAo8HmcJtXkVegWVTEbnGLrGBi1q14Qfhj9er7zVSKSPNooBX5rhr7TNCWVYQUi1CDD4LbEpWCtftncYC5",
  "key5": "46T5SkXKxybLKKWDDFxRo22jzZroFBDJ9gFnP7hNzshBF3Gpv3JJsSDUNHSm4aveTa338LG5LjDwxzdj5K2AzGzY",
  "key6": "DqbcUMSz4G4qsQ9eXe78GX33absRvXLgzR3LEy9YH49rhAaf1coc3VPUq1sbVafX4Urw2h7YDZdzcdF5cPsTBoo",
  "key7": "3HAZN8jTpryNeHskncmTGw2CE2Qw59RMehiX16h9HGj5sVP2TzB5vdWv4UkSQynaiZMYAXm6w6gVFcQM1tHKK3NG",
  "key8": "2WJViAmBu7Hy6ioXCvwSE3KWrwq6uPuLwUjKGnUL2VuWYDKaWya8vvVYznH1hBKyvsqpPpKYPznJxkriwR5mFLEK",
  "key9": "2rNr8SLmG3f559XmDY9Q525znq1vUwxgBGJ7EJXEBY6yjU3w3wwrJnz3TRsoCByzBUsmEeJkfnyeFef1zjSuBkoq",
  "key10": "ZFh6BPyKGfNAcr38EJyDzovJ5ZzY7ZkPRi873sXvFKbzqkPtfdqJkQrKvNzqWfvwkRsqVkoh1KeJ4bPZb3gMa53",
  "key11": "54gDpGsfkYgHawQqKmeqUTUtFracSwmaRzMaUSrSthV4ydvsLLE7rzTp74FfKahySKFNrjhwu4gJrZ9YDduL5SQ8",
  "key12": "32jZVK6VBtBtwVNW5E1xbsjqndSREs1TbGQCaZBr77b1Gw9GfzzoiNSPubjARbCsyrmntPRyQaTcdqRjgbPDrGyk",
  "key13": "2qeuNoUbwr7nsksbkZe6MxEmLhhcdoyh2V4JWZQ7dhEoy4JmF9A2UYgMECFoVebcjJjr9YTyp5Nct57gBvHpxCZD",
  "key14": "59J9tkFtQGmjHHHCi5vhGMAEsEBsCvCdEc1A3Z2jfrqDLZFUtK7jGc7AQyXUEt4MgFySxZJtNME2knjEY7B1fGDA",
  "key15": "46LgXwrgsXCDzSJdv5NrQGHp2Kx1gqjei9tN6pDyVdgcQWZFKxr7D13S7RDtMfJGas1fzcMRHaMZmM93PHYj8XyK",
  "key16": "zo76T8UTN9fkuKZi33CdU1w7G3aeSssT1t6Woozqstgq3WnxeoSqPUu9zeLrxnaRCucB5Hx47rDgwte455EW1RW",
  "key17": "awVoRPvPDsWTpLdMtJkTbX5PtUcLWPLk83bG1dtgZkA4y5E5YJphVcduc6bkXrxZsnbJar9sLeV8rmdQGwoSTUR",
  "key18": "Lv5QSy4TYB3eUj34gzNsT1NWEf6ZMxxo3SoDbTJBePvxC3Vwkxpu6pEyXwtN1hVTLBhJGkrhd9dYxSK6w3GEa1u",
  "key19": "rARMSYJ5eUEXC1ArEn7UBhA54JUJVHXn63Bbxgg1PZuzBhomr6LotrYwqCUbquCP8wGNSKjjZHJeMM7JC6w9eUY",
  "key20": "sYv6qiHwzJTSSEJeCpuUq7XoJXdiWEBGPPoVNHvpDeg2Z7tQGPq9EYuCgfSp9MdZLa49n4QdQVnvtsQw84qvyrd",
  "key21": "rePB3kUS8dv691b49NJzzas29e21SXcmSuLGM3bRZEVDgqB5y6iyWFq3S9SvSeMZkbiufEaEm6m32vczBwER4BU",
  "key22": "4iqjsC4LUgLyFHtHpgW4BMvgahvkrv4vCBaY4aEP9oRmxRmftScmco5iqLhGogwzDTkVq2VwEDS8oSpMaJLi792G",
  "key23": "321oUtrCg6HdLUeqzotaNHZNYJPv8vGTA1Zo7rjrdS9WsStKw2JnWbTWjrynSipJyBw6Duumft8UjTgRuT19cFXT",
  "key24": "5QksiYREtEu4a1CWY8NSZXM2uYftKVGrawBYxyDBVtzkiQXtuBWqg186FsN21DCDEfKyCawzpZ2orzqcQKE7M9yt"
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
