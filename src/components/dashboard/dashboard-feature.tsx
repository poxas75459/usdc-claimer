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
    "2hdD6gdFaTwz2SzY5WktoERPZGqKvUgysZpey7nYG4ufSwdVBkTGh81489dfmRDenHhYNRqJBfDa67r2BGfFNVNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aQmgjTVh8RVidemekxYdy4PtMHbQH5ZnNSiGy8zLp1SoLCHrBysUyUPuiyPMR1XiwQMCG65YVsMTif13mjXBx7c",
  "key1": "Qz5rnKNPuuy5wT4rzc75zA3X3rfFVbpGQX3PAHsifUcXzNaA6gJG5zuw8hnkPNDxDW6DqyzX7ofcu7CfgM98x2D",
  "key2": "2Pde3qnyrh5mUKhb3gYDFUvMGELyHCaoDXgzsXLdLLBRNam4Tb8e46NzAhGSYZ6F3eG3TSF9byy86cNqPz7L81ZS",
  "key3": "3EBD3dBMwHpZYooExVHhuV5ti2LzEmXNpfgpU4H6p49ii7RUwD41inShj19i9piuVbRMpdqdKX4qpQJRAjMxvQLx",
  "key4": "3mKYxtfvZAghfBrVTCDJboYRq7xbwqMe5XvGUxqEkSUt7dvp7ipgHibQ8hRyPZ7uC95oyewfLauhpBkS8Bt5jxzV",
  "key5": "59Psz4PN27MptFgD71DFRQ5KvWbrq6MJ2TmHQ1pTirceWTFhCn8GJ1wnVHGdj5hazyas77Hp366PRQqLwfH25byF",
  "key6": "5FqADxaEcbGpqncboG2LnVDkRHyuE8D1uicm1QQcVKsAsTNb9J7X34yLuA1tMmvA52ELWkK8xhH3KdxQLKZxPg7E",
  "key7": "2nWpgB7rJsUjsUHDf6naj8PA8HC6TT5onQ87optwCTd5d7TpHCHqLaQ97TrB7BD14XroodUxHxhPNjQwTeveRJZN",
  "key8": "5Cm6gjQUZhMta2Lug2vfKR4Uv8NBdmbvUPAVuxiemK2GonNX7qiQCcfy3q2nTkXSVU5KSXPRxNqssrBhngR2yMz9",
  "key9": "4Cc6oKEAnvcNE6U2ykFtGWjjtg7oBieNSqofjPg2A1Di8Cmzm9vLfvuZR424QsJ4jPNsoT95cQMDzALsAURd5WmR",
  "key10": "3GG1TRSoBKLYo9nBN9smXv1jN8eKbHtjUunqNjuH6afDLx8RJ8GCuegdUgxsH8FyRVsuXF88c3Xzgy8pcbpGPXQJ",
  "key11": "3dFYA2RJnMdQE5tb7Ur5hpnT8gcH72bYpnFnjUEtb5YrX2FPUu78c9BhRktSaJy5LMV5TmNHD9GYAeYeeo7yhw7m",
  "key12": "4L8VtuQjJ5xfMChrvtLeMYHaX8BuvzbScECdC7n14umiU9z2PyjRxNgnQBUateK6DLw45qBak8e2YnZdjpJJK12B",
  "key13": "2Z2ttoa33yq5KfXGqVeUWoutjYsWRoSZBgBxochuC1nTS9VRHwhwt83AQQxUc5xwHJYRUywy6Gt6btQNhtms6Q2g",
  "key14": "2pSma4ix6VChexwfpv7qSEsXDoRbLVRaSpnqL4gPgWYMpTAmTKAu5yFYTGUFJcZfXbyF46Veb4nJbthANSdn66Y6",
  "key15": "2PjZsUMFrFchFgTjZ92y4V15AbCWofkKS78FtDivkV7k79bn4HJKUeQx12QLAmkayXAuZMSRkogu7JLSvmoVbg3t",
  "key16": "FXPDaefp53bNrAkEyrJzBWJGnvZpfpRC1VwkbzmMq3GEYGYeXp1EvuQueAgrbaWtyvFAYEmkXT6XyJ3F36A2roa",
  "key17": "sUa1RZEq9JUrtpkykSw9hzp5UZmyubrHbnA7iQkMpiKQTeCJFPmoTRZ4YxCCpSF6AZp2ebBD5uG1AwpDEY5a93W",
  "key18": "4Bb6PkHUmbucGSwdPc9NgFB2VN5pBznTakNZKXb4HmEzqiLXoMb6L3Cr9w7vTZwpYfLxQTR4hMvuuACBdJwTnUkx",
  "key19": "61TrPhaknSR6dhPxgMLcCSnKxgdFocim6N7nKfMwkn3NXJ7YUnVDErHetmtReJWcBSy3xvMb5v6vA3YxiDChvBD",
  "key20": "59MmtB3PkLsgDMzke1d5gpkUhvN8n7iqywNhRyLAmU3vxGbsXRpqff2jdCU2CRYXSHV4Xedx73FJkPBG8nKmiUu9",
  "key21": "4QDKdo1ht2o5TLnj3iBK3oygCuvJMZbnCVVbNnUyCFLSymQfePq6mcopmMPAHC94tKzXPnMTWTdJQpQC73n54bjh",
  "key22": "GPZUDbu35CnHLoTVSiJTwiqXDeRPZiBJVuSqtaV8m8SNvr4AJAFWhMTr9eDpcYtstSeWjEsTKoWEyyLJHyZnUfA",
  "key23": "2fkh8nXrKmvS4mdD5EGe59nFLbmRUZgsYof3nbEFikaf55mo7mRqFfCzXcsgHQ6gzxMNchhyQDasxU8R881yNAgd",
  "key24": "229p7xHZLUcn2h7ULQJKR6SeT9xS9pPPhen2GuZ3z5sq5kyA5XWGZezX3zJ3eWPDeq6eBRWMA4VMMovD9LLP71eV",
  "key25": "5BEebSzPgYFCnKzwHMKBmKzLmieHRJSpZZcLvQmKTE58MXXrq6FrbCceNcTtYB3NGyCjeqBEzQSTaZFGyPHDJbZ4",
  "key26": "Yn3LcGwdg5QwZMAJjuAZPvaUn9FeUiiEZMxCVQ6noNAtfYjm6NHboq991fiHSKtCVb9nWCFwfsEEmhPQ3rXgJhR",
  "key27": "3rzx2FQFj8dN1Wz9maMHPRQJe6RPB8C8rmTjBqNSbcpJ6dMBvSsEWW8ejMxFZPddZnuhZQtw7EN1CcqGAbaNN2jn",
  "key28": "2p6pQVvLDv35fyLkdg51nxFNaShrvBDiBScTRRvbMmEeGWxWgowSoiWPTNFPyrqX9bsW5JAMRc1XVEmWuPSb1391",
  "key29": "4pSmT4VgNNsGpMK8M3kJWGnkWPBU5UdSvd983CjMTcz3D6SDYccnHDv6b7tQYbSfT6YQisbiCqnvX5fFCNBM1gDn",
  "key30": "3btUUV5XqYYE8B334AxtomrNLu4Nu48dme89ngXEDyhzdfSW8TgeY9kNzVu9zJNysnYFb4BSyrRpuGHEcQv7MxRv",
  "key31": "36PoKvG97GHam64nafVo5JhYaaGbfdVncMzwCFuWSDySSnFji1Q16mG8CKQkRQqdTGpf1dM7vf5EaWNi1YF5FWaT",
  "key32": "2gQtzqJEKvbj33VeJbRQHnXNGsSQcfvWzA9m7qSGtYupobY6iSVXKz7TMAxvC9nssRAMvYcPUYC2pVyux9bTqorj",
  "key33": "4XzSedCXu8Tngj9fZsu42WB3cxv2eHBDQZ29fvAYDZ9WNUEkg9VHERYxAcS4mtf8hyfGvTv8FhbqvhoLT2FPzjzd",
  "key34": "4TUx5hWxqT2PDSiMkRDiGPxdZ8XQ9JK5UkjeiUenHaHpbPU2MN46LRXqt1Wv7BCirEbwb39teRXfuTR6GQqjZ6k3",
  "key35": "5xdqyZjyBNSEFpi1oDS5m26PFJUJH9KaHUcPRa2zW6SuiQfgAn5XyMCogQCNsmtYZQDYqEkoi1fB141oCEnt4fSy",
  "key36": "4PDPoXbKGGsoKUFzbDapB6LP9Jdr4nKCH8SqCk4FuHbPTiRXY3JTohCkki6VRwqVyk1PQ6RdgQAWY28tzUt1gxCC",
  "key37": "5GYCf9p7FyRuPEEVbTnhNp79LhfRGvQQ5YtUVUy2Nrr3wLzkxYDp1i2hDvqYFyS8SQAVhcyoJ9q38L2z7CfNmW4R",
  "key38": "2BmCVpX4eXz1QDqaodDvmyheJhxuyhk3B5X7e8ffxW2pusuwtM3Ld8r3TkGncuH6SX3o3AfinJt77PuQfX4CNSiG",
  "key39": "2QRXZW1D6JmZqEkRm4ieH7hBJiQmtqVSNj9j7burgtM6W4BbqsmtNEpPERkBk7ASAATVK9ZsSY6jbjsjV1wHH7QJ",
  "key40": "44T5JzcZzBaL9afQNuoJCt49Co8zHvFpytGZbQWS3T5cXxqoxKeHp66Rq3AE3RVdxsbU12nSh3SwFkyNJPNfsB6s"
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
