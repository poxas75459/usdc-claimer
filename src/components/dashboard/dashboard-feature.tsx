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
    "48V25AhJXMfRiizKR1j6kDNBjDbQPehec3ChbZLRQbhMpfG71gRU4DtfUmGor6m1yGeLG5hm79P3QbvgtjnteEoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aKa8iRcXoXgQgHfgkyt5LRiAtoCxcaNoyqEgeNsCVnYeGWR4myXHxRpcD2Pyd2mHKDHqnR7rZRBLyRtmFhvWqn1",
  "key1": "wtTEw3cEpoPjrn9Dc97xntfn9WeyUWsNe4mxBBoBRQDwk5TbBrySpZhjyGgGak144XDQnoFCHGyfS9NPbKuaVkW",
  "key2": "2xxiYUL8WDHVvdp42eiqW3FEVuSgrWsupouyp82qcU9AznQp4mc5owcFSPJdDHeunUhyTaNZoE1RY2jExxzg9iRR",
  "key3": "4tLDQ1qYTCmNLYseSqpY3H7YFxrZjniyyxtuKYYb6iDQsxifsL8ZeEpq9Zqisxb5VWt1LrAsUa4QqaKqmx6xiXmi",
  "key4": "HrZBEdeHiD8JUZxedXG9NFvCvXtRgVKdfLmCu847QR5bLBkwQC9nU2mbjMMhLvMqDatiNraYST8JUyuJ2Bz64DX",
  "key5": "3fGqhuiB8qJt4eESkDNcve7Pw3E3TMB2vyNCaGHNic8Hcyo51FRsc8AaZ7YXx2NVVgq2MyT1V57LvkzEXPcXJv6M",
  "key6": "CYh9XFomogvnRMvECjspG3njGoerELBabrLtBSc9CBiSVxVLYAd4sbYVRHsmv2Fy1TmgfzwnmTs1RgeqQUUHBA3",
  "key7": "2j9FttHbaj9iReZPgDWbb5yiSgPhV1Vu7DZ5K3XRv3YDDZ9hKSVrGV81hbSuqWNFZtUV2db58QeEai3QthqTQtdJ",
  "key8": "54M3Ricms64edB84Uh7rfhmaQv4KSoDhJxmn5CHMxK2qFL5f1LDGjp4e8PLFswidxj7krDsPzu9kcFBtWCSY2sW",
  "key9": "3p9Fd27SJJraWqWV3VPjpcRKDEiGSYpHPrfc7KTBzycCXyu2oupuhEKJGwxSoU9rhvCDiyFB593dpNY9xVRVYcd",
  "key10": "2T4dNjLeeRJaAsQGp6Zk3ShLDmDVPFqj5HV1MkWAbMqPfjCk4zypt4N42eXbnaz1hWFBDoLNWxsjvtNPtWXo3aGE",
  "key11": "3Uqx9Bvi4qS59npAC5nqvJHL4PA8ZqqmvtBaLhkNaYA34i8mGPCRE42PXdcVd5sVtkTj8b3LVm13QDdgADQZjUAH",
  "key12": "5QQaVKxQj6f3RuzEkELaZJx64iT533UTp4L4h8r8XJ2JcJrD4dUpgQvj4yvj4r2ocWkd2zJEugDeKbcUKCCinMff",
  "key13": "4frSvappuQtKW1wW91L9qady29NAE19rA3qHZgsADeZ1tb8c6Axvqe7zDXS7YVBD12KtzB6MF1GKNdyn1UthRFhS",
  "key14": "3QHAANELx9iwjCx4i5xoU7hsLEis1XTmG4h3L9PeVBBwTYtzWjVS3bz2FXpQy3iXFssx9epaEAMqYvcLSrqjwrgk",
  "key15": "3FRJ3b1YGVhcM6J4Y7MxfHhznpumKtWu5pxUxxfEERyt9EAh78Ao3rT7haYWB3h9t6iZKFRA5xRR5TcGXwEqCEfg",
  "key16": "5eEBtTTUVX6NgDNShw3WpchXdR8bbECJ8RnErB4nCppb47giVdCASbsPNYvrq5JYfAFWBSDB2Ko6ZB1u429qKsoA",
  "key17": "5w1Sf8NxWYmc3NU2utYft8nku9vUeLi5yaKe8r49TQihKywgsTJJ1nNEMruBirUceNo7ubBu1Wzj1zjAkDuRAcKg",
  "key18": "5gGszEhyQvtzGrMQaRjzsbAqswbURv49ofw2oTq22jkeVMEkUvFBKrvkaoHV4rdfH49GazSd9A4grjvAqxzsacXK",
  "key19": "4AhguPGa7gkQLAFRYMX8kid23RoAjDeC5wnBrsrwiYdFfynqBf2G2W5emNQepdTnmVWXArU1cW8eaFkPfFUXQb1T",
  "key20": "4d5rnhrXFZRqpUroYHRs1zDbimadxPEeMrGyiEF18ndwhRevttXSEsk61FXvfYw7svV2sMp8GK3VnTJctX5dmiuQ",
  "key21": "3ufN9xj12A11u9Gtj8WiX5ib8TCznWFFgEWSwD2opu9styzGNYbw8s2apU8e2cqvcbc9jBbTjLiqFQwuzVSUyyqP",
  "key22": "4i1CRL3zAuUQX7tXyqvm5McV6Ti7y9QpnDT6V5nTgBwH8C92scpTcpzTWnZPb4jTtMhbHNP74XZjTvqBuyJ1gZzH",
  "key23": "63b24ifyZXv9vLfTpXxHN5jiYBxBsu5WFeoxivqHDcMgFK5JYA7vncMjkQCjP8YPMo2awhBzo4GVKvxggEHN1f1z",
  "key24": "4kLSBXKV11V4nprc6m5doPSwuyrYQMsj65tCuYmybk7XeWsefKBLzoLzBFXrpoeSzkC9CVeBiToxfGuuV6dxc7ha",
  "key25": "caPnUq4iPhxKxEGfGThTb7DSYN1pCLyaW1nmSdewn1vYjKCaZThQDAvbhggSPYEf1zxZFfiN8aTA3AVGxWGduR8",
  "key26": "22vJ4bwGyB32nN23HxJTed7Q1JRtaAzEg8ncqVJHSfCoWnnMLcQxEn5KqR2KEpvvrEGfyxhGBBkpcLX3HoEEj6LD",
  "key27": "33cJX5S1686i9UwES8iHdRk9GYeKKV5h7b2T7AqjYgRkhoK4m5hUiNF6A3LEdiyf6Jdga6gCAh1Zy5Hr7rxTrBLb",
  "key28": "wuGqMhCaMzSe6soVA7Epo6m8JomZH11GWDPexXZSChGDQ5ymyCd97UsrbKFxSw6F8Wxp9tqJyMRQozn4X7C5S94",
  "key29": "47fWPZSYbb8EGP9ZEgnGb6M6HNGW8jJtphtdF6GorwCMRR4SweXVQBWUFsoukjoiSVRMGvmeNoNQ8vSD8vz87xjm"
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
