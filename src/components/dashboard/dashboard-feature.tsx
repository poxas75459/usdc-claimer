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
    "5zRvMKk8VDP5qXvohXbp1TYGpEpz3CHDwf9UNVRqYpZ46GbCN33iiaRtgiSoFe1Bgg1PyxUVFTZFmiMskbprJtwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26bQ1BsMe9VfChnCwyZL8i6SMv8uKiVmfoqd4Qgn8nnfEPeBKtDYhGeXoj5shRDibitfz7wGwsARySr996kgjCvN",
  "key1": "2L6j9kWhaehKAVRwBXQMnrtrFtHrmQtzVsUzVPDCRBaBK2u5fp4j6myqB9fLzCLVt9RZGFuFPeUeZiq3n4EN3gxw",
  "key2": "4f58HAg5CghnRQprcUprhhSzzn87hwvbpsshzW2XTzB9mvuccq2DjKqMprxWDCd2DwGzRjifTq1vqkF5HNsS5SoN",
  "key3": "w6D75Jv61AZ5GrPgUxcrFxSyB7q3344q2nxf14BSsFpjzc86ZkG4UhKxJwktw7F67gPEuSQe1RjLQJgpCgEMzNB",
  "key4": "3xRG8jgZBoG6ER9n594Ksdaxt7gN987s8suTSK6bWKDj7pv17jLn7qhbmFrmwijgstBDHaCguQUDQgSPiPYquKnY",
  "key5": "4EKNrNh9YE9QYVr9Ls1MbzrUWqhm9DH3iDpNYnaWv4TpEiwmDL6twqE9jQbEbCRAVu7DnmywHu4zkCDHLrZ81XwM",
  "key6": "5sT4BS8CyGBPHPbqEUjB59uEz5bybymjWUtzdWLBa9LufwVbdqV8nFLQSQXVUwjR8ZfW3tW6owNd3ZRWF5uyGLeN",
  "key7": "2krZdLn6xeoSGErrgb683BVJ9gew9BXN4ytFsyAdivMb4evTUZDbiDHJwwFBfWr5uv4GnYekDKjjkRPAThtDmrCV",
  "key8": "2Pkaa58vHxqGruUPZVd8SbsyqMAFfDTSqCPwRe28hHXaahZmzEnv4ZmqSfhbQzSSH1ZRbcGeo6ahjb7MKbrRKSrA",
  "key9": "59YvFxynNL8sPXwCqAFw2qjjWdj5EhZvz5zsYSw5xv9cP2kkJ2Yy9Ekbsvn4GaDJZByFgDNg16sTEvRUkBTyevTH",
  "key10": "37CG77J5h1xqcc7ve3KTTnF8qk92d76yaYnadD7RPD8PKrCe7WYeZcLsicYotg7C16mJK8xj3P2JcUaedZ7Z5vef",
  "key11": "dxdsuL8zB47ec95CgqtuwhwLp8yRfxmSb1aoiqjsMR2KGmeE1HhZPSzdLsWZKhJeH7eHFDWGmvjrqiJHvt2sMEw",
  "key12": "3zUifeGxt5TYbDmkrJExDsgrwewLYUAjxvqY5Y5pvwqK53PWvNm7Aptz6izZhDn3z5x8B2t3hWR33TQRxD8eSQ63",
  "key13": "4NcAKCwAEtEDCg48qSyxrDuXJxbCGSudqpqSDHbp3r6ufJEj9kLqYa5QmXMtyAyes6VGLua4fsPdnAPJAWiohbPu",
  "key14": "sqipVeUNaFgyNf5yW2GDWZtHsxz1Wkxuxup4dZuMUcu6u8rwFxXqtoJFTUYgjFg8PUZ11VknKcsvGA2X123GECo",
  "key15": "2yKenfTXggxb8YaYArMv4h5KrfJoqXrwpnMYvyQGcNHzNsPEnCSESJmWSHbADzXgyQRSMvhPZ2mWCjNUsNWq3Naa",
  "key16": "4EUqNacdhtWV74ZPz6YvNGMvjd6Ys7r8NewqDJXSwBp6zZAEEHj2X5rhYfDJzutmRvqRYzrVrVhNTyBSfyS9XNZn",
  "key17": "3b8hStZL1qwtz6Cz3eUpKSn4ZKfF3C3fD6wFMDbpsLtb6UNuuxu8QGWDKfYibDSTcGW1oL2kT4wvj7kSjdVsLmfP",
  "key18": "2Pd42mnbDRB1YjkTraVEQHxQSSjyEmppMTaTwPuto3wFp5mYSQnCgZzBUk5nnpBjDgWh3yWVgPa92kaHE9YfZ7Jn",
  "key19": "2cSQt2gvpAiopegw8odRaP7n4GCVxah6ppbrLKPLyWfEYM9GpYTruW96F8k7Rz5XJGbwqDmyfAFBNRQxZp1LrTdA",
  "key20": "2GKbztKaehiDUqgnUgUnsApk2PByhMjjozqQxLid9tpUwJUxTCs6nXHbxrEXc9PFJgdSzWkteEtTNWcz2EPbtDje",
  "key21": "4EN6EdZHzqmtu7wbrHPgevf5NPDPWqyqGjpm8mnRobE2h3nSN7iXRSYPEdKubVTCHjCZeAGf8BhYp9wi86DNZeSr",
  "key22": "58xdfVujbKSmxfdYAgabVjtvWhWjUCP3zEqPsvkVTE5vRFLumA7LZ9KjJPvNcXKPc4UGP29vdYHRFxy2Gns5kJ6",
  "key23": "5DtMYGteMxc754JdWbnc4RD1zjS4eLtErJevBTGCw8SezFuWHRqfcy9BAxFdgeFNzs77s59QZBzrFPFjaazN4iiL",
  "key24": "4NJqfFv3inVc9mBGnCenSaV5PrZuiWymuK5AfSJd3C265SKUYJVo5GvymjwboRymSJj7vEVuboDPGMZDStnhia8e",
  "key25": "4WqxEzz1H8uSb3w4bnd3exxtvev2D7s9HRegLJZBSJriWBCN95jhozqenaVSH3arfESTQbZuuD4xsvQEq1h9sEjx",
  "key26": "T5sta78YoBgs6zbeqaa1sCfiGVPY9ktaGwbbeuXAnhUW1HDG7Wjjg6zimxKhWLirU7h216naYEwmgtjpmbdoqve",
  "key27": "2StewXjuBxS3znL1HPZk82NXcq1kr9w82d3PmUUnJxWXbVv6xPPgzNreR4KXjZCWWstnbxxaD2FsNssrqumBtKMo",
  "key28": "3bJ6sq2Kq73TFy4GKzfqbvqohw29zFGHCcbvPKwK2t5J3bZP79qxSAqe9Qk8Qmzt1BhvRNGAVG2HPdhXicUVkewE",
  "key29": "658oJowbBMrz84KC5qKDr6sTKkRVeMRVSYgt8EQsNeeGucfw26x6t748eHWmCBNCdqRdsu8QuA1dhteon8UVd4Hj",
  "key30": "4aCSUA3T1ujKzAtLLxF8AWR8k9a2a3ikoDgFoCFsosLJjsHEDAmcUDjRu8BvujrboLoeQcucfTDQ1GU725jkH328",
  "key31": "2YrxbhC1PaJzDTYLWc1EgE3GG285W4mymJmkqnbA5E4SqSb5RtnbSpHiDCnnNYUWfQRhJji5aWSWEGgPjv4YTpVX",
  "key32": "3LL6fMixCxDA5FRoT4VFJBc1Fkkf8sRk8JG8FL4f5Csp5pxZYVAWBkv5H7mtSbMjzfKzDEUj5u2CfqCcFnJDqPEh"
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
