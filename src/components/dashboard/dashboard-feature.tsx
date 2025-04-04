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
    "yTAUQqhdgS4JTynXa61VEQ6irjcX8CSdVadfbwVuJbSmthZ4WHw9wASTEZkMgqtjMHuwBgiYCDx1fcMHDZNstmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jWNFKqv1uagEHVniF9cS3vpwrRsoGF4CryF6ekBZroPyHCee315JWVYBSMk8t8X5D7WB7DB1VwmY2rAW86KRm7B",
  "key1": "4Z49LrXzTGsbCniJMMsYapBBAhbpDSqt17ZLYgoGk7r8tQPcsxsWAKFe9LdVPK1TgyzCUPs2hY7Utuk5voRDU8Fj",
  "key2": "2d5PdhnsQnyoZi6UyC3v9xtD2wwPaUqbsk1Sab5MaNrh1qRHnbEyziY5JexTRHxckuaYPhoncjZ8oyqyPVzieKc2",
  "key3": "3SLctbRthD3NVrxK466JkAcgCQGYHgJVGA2Kbz95qRrdG5a5YKznSKucT8PALxRmSiuMsvz55gf4wdHjQVuPdp54",
  "key4": "29tRbrfsh7DyHyRdi1oTgHk8du25wU12r6YyitUFjWqm1Bb8tFwJchyZGA1HzyWCvmAyCmb5GygAC8ybJJd7THVA",
  "key5": "Emozyk8kKhQJdCEDMX3MocM3wnufetYfvymGSedc4LAsiUrJr2MpCBncd1LENQ9kHBFTicZEYk3EY3byF6usLWD",
  "key6": "3Cv5XRNvLZpNyFrx64nATYVeU8jZsS1CUQxL1DnZZbqPieHcXAAvGtDhX4G6HCbZee7RZfvVgv4VMNdbAwQyxzPE",
  "key7": "4EyBiM2Ub8x1QtKL1afTDerVjYy1sR72g2v1Us8rc9UoJrTwJ7VQoYw3B8Lj5fyrChEghAKEmSWBDxAopeuk3Hgt",
  "key8": "67ZU68RVD7ps5UXBGr4tbfbppbD8C8RsBEVDypMFHMSXXzqiUeFgnWJ7ynAnmYw7WzUzfPv7362URJK3qvADHdGj",
  "key9": "23ZfxYwXnwQ2Eq6YUEz1JWKkAK5QkqVwZYnLEwcsBxap2fWGh1u8Hkew6Ke8YXeJ5zxyRN8HFfm5CA3MsLGqFb46",
  "key10": "2rLXFe3DYQEagL5Rw2Bfsi7tXK2Ev9EFaWzMq4A3DHpm9GJWcWbaH4CypS8zyr8ikQyZ2BRV87H7pfC8dE1f3vit",
  "key11": "38Jiv6RsQzGbusQDoyweRzVvy1AWWEvncY5EBk7wJNuZYjJ9cRUQSHYFFivJ294USMnpebVQWrkBYxkuxFFS4TKv",
  "key12": "2Vmw4eRMBg3Yh1G1hMCNbUxNo67SXByQ2QNniHEui5HNh7zbSc419web6cgGKzRioPYewFPofLrGpKzZWHzp3kAD",
  "key13": "3fnEvEDXZf7hF6P8bft9JDUrAzWxpa9mBeC5y3vhtfNAUVc4e9yKm7Si5gRuzRyT7rAaj75BkhMi3tkwHPhsvLDZ",
  "key14": "55VWV2iybKBT2YuoGRcNWgJSaYdwJJkeGgqkf75N16fxZnY6PBXm9VHy3oedipd21qm2DwAjRmKMmt6qT4cz22Bp",
  "key15": "5qMRmpjihJfW2YMPKfB6mcKrqB99oHvPMYp2mkjJnpKakYCyBvsZpTNLno4PJCkkPkHNfSVDANNq19BP2Rn1HXSx",
  "key16": "bMGzzZaB9jzhHypR2Nkh8YvDXaxSEKFLvsQq15bpzz92PA1TQfmWmqBP1mQHYpwSt3QUZ67U2c3LVvmpLqjtWFh",
  "key17": "52x41gBxyYGvFNArVNmWzfwhZNekwRFJF7DD4LeQK2Hac4p62JfhrmJkTNVZ1Ewff3cUWieMocfMmPYLjZc1pAwt",
  "key18": "5ZnRZAoaEq8xy3NfMhFMBuG7pfTSiXBNKZJ8SynEie1R8A1aEcmBXskapTeHvwTnNHDjPyL7m7PRAguEs4PtQXsE",
  "key19": "5M4xYMibdaBeJFyXBJUtv45M7PhCLTQFHjjQ1K37FLtNbMXL3qU5sEySmwbCUk3Lx4dxuUiRJs7BUP49HxQkkFBu",
  "key20": "54vPoq7gNqfdFXrcQ2oT1H26h24sUSxNquqkgQJpiKnecKgkAi72V3ZyaXiBnJMoc8wVcYpKzr8vqQnLGFgrpmxK",
  "key21": "3Qke1qrfuU9ErivVdC2dkA5wZR2zDReo3aptAGQQDKZGp47K4fNge1Wpah1jjb2caTnKYaTEACBndouqEcLPDbUV",
  "key22": "35JdKkqqYR2qa8MbqsiafdDo2Pfnhgw52tvsvxNJpjLSmri17mb2Ms1VfcojRqAdqiVcQkaX7pLqQGc8F8T6NNK7",
  "key23": "4wSc62LqBuio2ZprhgpDHaMi5GSKo6qn4woa9iprDBn8dmSsu452Zwmbg3gyfxfnfLFHuJXjeDeytH1AgP8sqWtA",
  "key24": "5iZT2pK2x8RzmTVVD44PfQoHgfATDGjDy41KYQbQmkC3G5SVzPyfTLHMGcgCSSStkEGXFAMynqk43TJG2XDQdwpD",
  "key25": "4MfNnD8yaBN1ffZwrUATkyb2urjsFJKFpyLmPS9zkxiQaGTbKpiJJWCdGhWbNm56izqw1uqbyR5gjX6Xokp164Fs",
  "key26": "Bpj3RsSCiGw3XduCbqmUrGqtb5K7KVg5u8Uc7sRZ3XPV7twX5xXEY6735bbzc2Z3aFUU5NcPMq7pNQjx7RJjMYP",
  "key27": "4vrz7auDxGtTb1iWN5n7ZoWAC9XAZC8hRSu7zFm9UVUFP2142UFThpCgmmY7sEJ53rkCwXR44P8ZPTk1DRtBWkXr",
  "key28": "4Lkkfxhd9YpqX7mpxiqbQKmPWyDhqy9ZjdLpRCxPszRy32RjnkHfat6LM8vE2HuuqLnuZh6v2X81D1G1ZUXnCMMV",
  "key29": "5u5RJaTDzY2KBaDxiNg2LjAHrhHqyhcA2dD3USjgHcHnmsaS9eNv21KWmg78TeGHqnueXGiJrr8crmTwRkctChPo",
  "key30": "3CoHMPkKvfqctx8k7YfPorVwRZ27TirfSMMCAXmukiM9Ec6JL8v6xeWHavaQkW3B48ksmvvqzxfjyFvt8p5YxSa4",
  "key31": "5gHXELBHA2g17dZZ2D25uXDEp9J4K17UyPdbDn9gtZiu3cycgz9QbdEU7bCBWVuVKGNnreZe8D9SF2Adup7Xu3aa",
  "key32": "4xeyytFDGnVMnNgumfBaN8MzyoSe1pDwsUj2LFWCUC2XQSVe52ufHZrzJu7WqLHnJpihcSspEUy8JVtqGd8gt8CW",
  "key33": "YqVB31byvkCUtU5BYWvJGZbyx9cvJY9cEZ2JnVFd2xR6LH3NcMQRBDjFxscg2VwtWBHzewzXiLSYGxPwmRJE2GF",
  "key34": "FnT51uAJYqUzrjoHdkjDNaToMq3Mt1e7mtRAD3mmh8zksKqAhhnjtn7WHdiNTePrLd8ccQYthjceHnmSaCq8o4N",
  "key35": "2D3HQVMdeHwxRrt2o6cFHxrC8RRQMVgqqegNaLvUVtcpeJvsRw5QuHCebX6kU24S7aMdCkmxGYZApkgNUQgajVXP",
  "key36": "4jgwUW1p23QwCTCs8uJZGMqDRThr4Cks54XeHGB6buhdw44D6qKhLUisGSxNTC7nkY1myZTLDbzgonzg9Swa7EHD",
  "key37": "3cAT1vi3MNJHWGSQ5LzAbrqppgeNBb3PbxmcpNU9bAibKBBYurLxWtqtZACvddexbvCDzhXEdQTjAZ4NPT2KSrcT",
  "key38": "24EomqTTLXKKucWdkb2GBSYiSnSEL91QZAppD3o5FN7b2Pu5navQmAPnPsHJv2wET5SCTBs3kPprtxMEHj2Y6y7i",
  "key39": "2SFAhKKGVSh6zrQthrQney4b5JS7dtXKTWYcvRwNdg6mohhBaYWS5hgrmF71DwrwwtP4y8gpT58EJmqSea84Fdub",
  "key40": "BWRv1z7Qt2GSgYPTNCUcM1jtzRCL6DRLQjYovCHsmh9wUen9nk3kvUntY7RNRtu4k3E4i23aZ5QbACY9w82Q6fr"
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
