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
    "4n79XKGwpm1ohUZTicGdKwiifUVKhPCQmxNJ6Rms2AuEHxECjWUppoHEFNrgqHYHfML6kAV5VejpbSMCPiRLWqdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hv4UpLHPqjKYngMPRfPWoubDzRZsyCTbNeLRA2nDHczwTtkzrxqiH5CTFgBxgtGDYHq15Ne3fB5bCUZCFDWNPq1",
  "key1": "5TaKuvtcnKzcptgnsDnhc55isLhTu1dpAukjrs6nReobSzXye1xBT6pSxxTDt6ykVmmLvhL1wTWTu9BEp9WSug7H",
  "key2": "VGaM7Tw4uttKnm2o4kd2nEr6sQ7nEwCZCQyVnRgeCZHcb7pVY4jmkU5EmAyvnE4Laj4g6hJzC3c3PvYcTszo7LC",
  "key3": "59PyCcgKppj9RBECZn9pr4c5zD9rcYVsk6C8mV5Jo3soEKkovQXLf4MZkJ4aGx6u2SfDWS4gEQhQWKmXPWXwBrA9",
  "key4": "4ySjAUD1HGdDLqfLXfKc8v8NxoiGm75Cqk8NbmtMvDVoyGE5zsg3AjJhGHg7f1SjkuQ7ohAkPdynUh79Qq2FC9mG",
  "key5": "62gWicDBxUznWxtqGgbu8tCvNYqxTWQSPX29z4kenVBofRQkUAq5oAGA9xizVE8crdGkQhTA8Uwp3WbWXoXUXew",
  "key6": "5zLrg4JS3SEgEPjDiC46GGfL48vBcYz58jhsQjvYoMLK4yuoXMpdUA2MsH7Tcs2Fw86nBC2VT6P9eBBas2Px5iye",
  "key7": "4auVPMpMiZanmXWm2osR6KBkNBsWHwQw1a3xjCW7XVj5ea5iDMgB7h3GXiUCSn9YTtmGkQboK3RuWE2TkUPLibTy",
  "key8": "3hDY7Gywboe3zCD8A9AAow6MVm7pkABXim2ZdNPiYi6cWBdomiMikBX8ogwNtEMEDVnbJKY23TZ2KgexLfGx7cp4",
  "key9": "3sE4r1v8mWAttoBmL1zYKoCecJvKnSHM8uwVH6gNMabX79PpgUsEPZEAAFMbeAsczf8q1Kvoc9cUyrAGNj4TCnut",
  "key10": "VcjRSiCW4uCLdxmkFHwVxodoeLVbBcowMwG6tYyspgZaY6eMdzpy4bXC5mB4feu9q8nPyQcjd5QBUTwdUowCNhC",
  "key11": "5h44KNc6Pf8ZwXToVSGTAhHFRQPjvLorsppvm6qpzcCpiNbPe1zuHWspS5dALM4L3i6tyoJecFmPzXjMyUQTZ9dC",
  "key12": "4xM49RD1HsmDxg1BhnVzqfPzityckV1kiukAhNw83VVQRWC8BkTZG1eT69UWVYGpkZztnvbUChTh27gaQ48CewnS",
  "key13": "35bTYvPhJbDRR6qQXk2GgieeD4s2sjifemiusXHoXCAYYX1k4CAZdMr427oSKCFYtW71xf1hyuonK8jj7vci5txx",
  "key14": "4nxJt3wprzg9ADc5HQCKsXquW4G777MG9uh7YpXSj5iR1GjLc6WXjsoXtFvVjhbxZBN5D8NZR9TbFPBHV1yV6tbJ",
  "key15": "re1LAumzjcxF4qbu6odkNzga3LYHxyduNjf6yGdaMmC3ksUU9WvnUTQZk274RffbEpbJ9nMVEyQWvGczrxQE9U7",
  "key16": "56zV54rKEHoBgRnu7iTNo3pMBieCBB413pjGc2t7983cbPFCeCDHQG31Yjf2iVvfoKFitZExaz5F2KNKNryj68zM",
  "key17": "5YRNHnQ9PiN9xHA6S1EmEnpineqNxgS3pB7WH84BsZeKC4dJDBxd47rjdn5Sd4hn67TxAzctF6Pe9dnp4xmbYvda",
  "key18": "f312JJyxoe7ycP8Bjn47UUXiJrtcircfVkAUwFxFeNaovpWEaaMokaAaiix6nZThC3frfp5M2pRDHiAPNjxbXNh",
  "key19": "3o7GTi4aBT733m6qpybwnUGJg45qG9A3DyDTYy44Qi9n1K2TNvDhGuCHi46i2X9Fc6BwzeDmB82MWPPVoT3xyXJA",
  "key20": "5Taz1MRq6fCTZi34fgHLqS1TPCREoUTLLGu8o7qsVMXNqc6zcXjZRAY3Xi7dSLubchS2wBTqhVrgW6aHc2jEgcFT",
  "key21": "2hK8srvMYFuhr6Q7ejbPELgF63kabSHCPFroraPh9jt1whrCsP1sFJrjixFbvdGJsWtYxCFnr626fD8svzrC9q4d",
  "key22": "4dfsv42FcQyDkffA5neF41SyZZQ8ucUhfvCDSJaa5sRSGxbP6pageddg7hXwbncCHvYPtLi4soxqJVR5XwWSces5",
  "key23": "5g3vpkPr82TjTEpFKCJ11BWC6QYYFLkaZtE7YVD1M36p3kt61hEQ67XHBWX3DCNFU4sPLiKeEdWaJ9BXoJxPE1yh",
  "key24": "4gix6XNC947LxrBETPVHNS87MFxeGKoHeAtt3mEytehFciRJCPfK2GrA3rzA6GjD3XrDqgAhGgvQ42ZoUx89EUQs",
  "key25": "zbUdyqhWPBJ3ruyV1SU8MjGGWoGhxX28hSpyfNC8F9iN6gKfSpf21nVgJ7QZ3gsyWuVwHeeFJ2HYWTPtBuhW8z7",
  "key26": "3Bh1wgsTAzhk9tzwahWpJ8YBdDey3p5rRUENmXUkUtEXxrPaaYh8sQ9wySyscE1J5Z3Kgra6sxkdgcZi6aqeV1aV",
  "key27": "29Jzs8JpFdXaK9yvdBsF1AmV71oeGs8NTqAf3c9vP6sLLTRNyhbFfSqwLcR4KKgnRMtTsBYANUasTFQboj9UMuUV",
  "key28": "5JFm7c2nstPcuU4gytVq816tHBwwt6kYjxrRaFGK1x6poFrBRdAA1m2brtCuusA5dXQgrt5foCpd64riaRnJESt7",
  "key29": "2dBGcvzkDMKcPDoQ4wP4jLMcHnNXjrZumQbtrJsxfcbzrDU9gT7verHUVGcZ7Njpk1cuwUy8n5tsciSec5AGSpbW",
  "key30": "2UXB8wHpYckT6C1Hf4PiYzrUr7yjLqFW2YVXYW4Zsh2GpcWEHxUSHwxNghYvAgXtxb1vs5CGkjQXzy6sMdSLzgJJ",
  "key31": "3oM1kFgW2LPqqanLrYMaKJpEh79poWisdhw7dJM3mALht9XBM9mqLd6KPgFbQpZXFKjL9aGr4nsBR4Kzzub6jHzg",
  "key32": "3c85SVc7Ve8aiGNLXMYZdCfz5s4UVgcrhxHvnM5dMhCwxAafVGbECDB5y7kdcjf71fY7hn15yXdYtdmqSc9KN8eo",
  "key33": "5BBzHWJrqGTHTdCXWpdguEh8YKSMi3zqSUkWDzsA1jm86NQGnT8ggJnYgMVQKngJMGDC4mgQqwjbfFeyJq8avRFB",
  "key34": "3HuLSc29gXwDrnZXNngGX52P2YPW6QQrZLa2SPFCMAJZZFfGnGmpqghiz3APb5GTLF8csRmS4oYwBWHHoWVxMRpr",
  "key35": "44cqRhqwaVUoRF8Rr8xwCLBDV1xtgDUk5W9Pv8JnRHwpexg1W1vuf9HXWVgwEtBWDozH5GA1KGDXKJwgjJKC9SpS",
  "key36": "4HA9aSjCfHiPFUy4wtw7g8hRd3ZxioXKBavgpL6NygmZpVc47h6g2porVfEUHoq29LSP9tMWdbmSKhXTudfvui1p",
  "key37": "2zqHcg9DrxUG5dVeTCV8MLaxcGEpTzbmQtrLazE8aUWX4K49kEFSP9V4bvVY52whigkWywyT1D3iUynyRJKPPnCY",
  "key38": "3h9Qy8BUxxh3onJ98wrKWbj2wMwqTaGPYyUkZ7z4cnxktgpw764LTgf1SiA9HxLLMV4Sq9yEm3E1sn8vzjau8AFx",
  "key39": "2p4HaW57jzawmqzc1hSHfLjjbVBuxkUrbQ5yDAui1rw8H6kBnybhNjg1ECTGk66S2MYuM44N6HHByD7UMgLNwCAs",
  "key40": "54gXE5LWh9N1J6GDQM8rDmLWfZPd8RJnsZhUy8c19BfoDnH1qRJq3VJS7a62UCrBLyGcjBjApoiEgfbTpJgeDkAk",
  "key41": "5gHyozycAVPZvgmVVpYTdKhUpYsjBxM5Jp2J7SxQ44q1UzRwF36etaKhqjr79C9ZfTY4GD7K2eUqSZRfyYZhY9zW",
  "key42": "5bQt9bW7RRGH5zqPEWQ4YAUaW54RpmTxVNG4G8b3FvQPhc3gwYRg9xXhQKDCuFFDDP3qGAPTLDVf8VNnWBgnPhZK",
  "key43": "2uPXho53sWXwPyVMhdCdQ5ewkm6waDXcP8HytRdnZ718nYZMC6hQYD365xm5ddHtwtZG3x7Vwygg4D6HaEaKtd7r"
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
