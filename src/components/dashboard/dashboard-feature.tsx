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
    "3TSaidas3B8cGwSzgscZ9J9J6DYV3zUoFE3EttgEVHH9VQUCfYvfi7rrtdRRM7Pv1UYb6JggfF9XYW9QZ9cEDZ8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u9a6yaSKAVKNjd6NFTV7qFEy7Fhvp1S7tBS38cveP43zDTp2LEtwvGeLv8YmwUxg2gn572SipXFV7CKHSa4Ropz",
  "key1": "3GzRYii9FG2J1FYQGmrYehAtrKUnuTviVSvycfoVpY9GWxWPn88YUxvWD7jMfSgCZMB59Kbke9jbHv9UfrChwXvt",
  "key2": "33kxte82nCi1f8vpkYZf3VaMfTv2t5rENDwLpAYZ7Dkz7RbA1znYDN8DTKvhK32ywiMZEtXT4BPoG41EaTfYFmes",
  "key3": "3jevF4xTbiKfsmWRtSrTFEcALhskdwsikuRndy5GaupYyFt3eVGV2npneeyRKFvrpQvJWHGjt8tscY2CKL3C1UaB",
  "key4": "3qDA3tkk2s1bkSRzhQKRnP8DfbHCP6ykYTHPMA1KyUoUXdXs1th124nFJLjt7DncvEc1RVdML9XPEwuygeip66c6",
  "key5": "4z2zBebUBtfobwKnyQdmegAMwBQA5BWiYAiBpyXtBBPpQki7uXvJb8ojvgxp1pE7ztXxm6yC5KWb2ui2VwzquenZ",
  "key6": "czkX1whQ2R1Dy8nNEaz24Wybud8jgL2zqNXhJb9RigtksLRGwPZkdMsZqZnnQr3csfQCdz8cGztR84BWaqaVqoT",
  "key7": "3jjeHsLsYRKjpJdeTsvzbW1vtGLbCd2EP7LujE1HJzdHZnZ9iKtjF56jzHWJXqDMdDW4CfQaAvZ1wrfStLGb6anh",
  "key8": "5DCdwmU9Aa9jCoSfVF5LuERbdsqyHy7vU9kYdENZY6irdnra3UGkxD8wcLchB6ebk8DNRvHSiQMR8PEU7SaCYB2V",
  "key9": "54NcK5JgsZ24gVnYDHM4qNe6zdyBLnZQfHYDpmcWzAxjAc5Ar7n6CVxZPuaeLERfx48hVgriH99nUVzt7jvVY4Lw",
  "key10": "4718RCrNGXBQgWwUcCirVUiB9d5FEvEqfJmRvRQzc5ynVSRcgwcgaPDXCHZ8ygVEopAtGEiBaUccR9mbZEkA1Gct",
  "key11": "c6LcTu7nfLmJttUX6X9fXW3govtfNXS1H9DUinDYWsyGYWBXx66btC4CoEdaWFXhYFSd3e7aquMagigduygU7zA",
  "key12": "5EpoL2A8GUC1N7Nqvq3jLV1fBD81cduquC2oMfnusYNcpiLruG1RemSVv4PbkyuqQosHBuQavPG79PKFjKriV1Sd",
  "key13": "5H1cQ8poMZmXaUo5d4bJBQ1ChjbPzWNh488oGcWGqQkQNhkUuBbFATajRrZNWzDpiNTsynHFjSZhCvKjvgWSsZWU",
  "key14": "3B9aG7W7B4mxhhHtJs5Veyoq68nMWLLuoZdgCeHXTLm5zbvsBndnUcVu62qwEUBX19h6AYWHia61YPJKn6Y4fbAK",
  "key15": "pwurrTg5c43UXfFTpm1Uu8qC6eGSTNptY6zzmxNUpLVoPHemhzYWkNj6JmWQdgweZu2pVhGSVb29wLbqm8ARiaD",
  "key16": "373o5fWUQDayeNtGUiEG7242UJC59Rz6YipWVADVwJDkX1f5fjTP6XZVCovs1NuADxcAGo6hBjPv5mD2DND99KUV",
  "key17": "5Cs3RQDii2yf9ANeH79Xkj25MEtCK1hQ8kJHwhege7yaSFMHwq9WwuMs6iMNzEBQwMEGyG7Z5BJNBXodEyJyWbXv",
  "key18": "5PdeWHabmZfVhhAY97s3oNaU366LeFR7kRKMgMb5AAn98yzGegxVGXCJbCB8yXsMPVmt4NRCyTsccHQRch97mhzk",
  "key19": "2S5uCQ7sZiwt5bV1vqhv7bDmUdnbf4DXs76fDpvnayVcgHcjQRg8fjLUUtj6tzF4AAjjVZkQANN5K2zgY226CQhn",
  "key20": "2jknXACz3m52MRa8C2Tarih4sJjQ53pwLjxAcNSy4F51iywE9XyFH8c9kdDKC8EitktrHRdzEsnV1fjWajnT78L5",
  "key21": "4a4dV94U8iu2ZFMwVLvFmkzdB18E6JHJm5X27PPqYxRQ7PfvJjPkpFeasdrXmB8X5SavmaUT4LXBUZf4MwTcSbx4",
  "key22": "RNunmVJprwRdJwnaRTg1CfRiWD7YkWb4PQFcMt2ahYy8yMcEBD94vUEDxk8HhoSA3PKQk8Nby9NccwCSJdAVv7L",
  "key23": "HWPTyddampL3sWDtSSBzsmWAPvLGabYTw2yjfeeS4x8ivjDcKjXmNm8nMhTn9g8ENaMggQDsXK78fxXH2eYnB89",
  "key24": "4H68Vzv7RZALsHD37UPFa4Kq83AdmvpHToPbgVVVWSSLK6WY6XZx8Xq3HtSEsrRYkwMstFUGjhEsdkZ1HPyfCWAN",
  "key25": "3wUF9ZXgVUPyqUT3oD385UYBFqjcrMDbXWbN8DWCrDGnEoP3DF8uhF3jt2Ag8JjDWjgbPhR1zcJM8853oEwSPxKS",
  "key26": "35JxXfgmho8cV2gTojxDtWKzKy3kkqN3P8zEx6Kxkt5m289KFX3CZxCZ5MHeBCTrvWdQNmzmTwpuSZBeL9AuCXE3",
  "key27": "fXgio7eJzNdxqiukzmMcHSPGKVuQYCGCUm3fMfqrCNWRFUJuY2sRUrEA3PL65gMyLwt1hQfPV4AXQf1ewfqxwXv",
  "key28": "3uuPwHUkuxntckN3EqcBcMqGzC4PkYTFrFYYaEAzjAr4XzCojC4RaTTJm4msmz5za2yBWDt7XHCnMWPyR6GitTqo",
  "key29": "5YmNgxBL2sXGmtnFtvN9txky9yAe87eVK8dN1qWSmQBmb2bRBmziPAwQw3ybLvJjQsuGPG4peiKhFUZK1Z4hqYt",
  "key30": "59oQWkwmKuhzmCzE9gQuM9daB28AF8zz6K5bHX4RBDekq75gg5RizEKgtettHi6L2JrgKDZAHc51aCJwRh49GVg7",
  "key31": "2QSgivgqoSC99h9TfxAEczptJB6XKNVq8jXNiyUSHVfQVjF1FLY4rho4v3JbuvpSuDGPs31HpcwZXDywU4HTnZ8M",
  "key32": "UFvLYcBoYTXnGnPRuq7iQ3GxU7uVh7S7CfoQufqZkqYTjo5xvdHky9yuwccXGMNMLTB63CK6rhkHEdjMmpesvGv",
  "key33": "3cJL7oDcJCQEe5kxCnT7WpfizCvKpm723RpJu9WdqxJb5Uc7ZGuZ4QbZEjV1SVWsptmc12gQdZcLogETvXHc6soe",
  "key34": "HbrPaYXM1srP91eSDpfGM6y5LWqGCTK3AY8kgmvr3cxJE8YQNbBai5S1KBSG9s8iCk32EZcGox3zCiXCEL7TDug",
  "key35": "33pZweMsmmG2VVtRa73H7eaYYMdeBhW9QTfcG2s2Sjsp63jxsnHDbLiqBKLcHxPesU6yn31nXUfKTmRqsqLRwTQs"
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
