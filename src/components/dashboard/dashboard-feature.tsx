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
    "433YrsKHeJPnEaTaLdzTRGEzvM3FRoLywAzHCkpCF2FxvsY4UT5Y1Z5TJV3vnKek3hew2x86RWPchXdvt4UvPYAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33yq1fy56NevxjGSDEtAxvz8y15du6Gj5c3UwzHrtfzvwgFfch3cedKB81YbzyfxARdQLSDB498h6yPRKh6Tuayi",
  "key1": "2aDUcpDZCMvr4iDzKzQAmsTGRVXtYM8Qns4drZfBjeTDkS98xEXmcaiKW7ifUKrpWK64HE4CY6gmxMsbw11Vcf6i",
  "key2": "5UwBNEN3Uuf9MKPJv8VcNb6oESq8o6Eyu9tQ3YB1yXLVcVcS5B2EdRntTkYCz9tHWP4TnBQ5NKhsdMt36HKUnoFJ",
  "key3": "4UUvBBvpDpnwMiqUxzGG5Xh8YcktgeRpftvZXw9c9pn49HV73mrnee3kbCVHGibixiwvHnnfJsiCzze2LhFoMKkM",
  "key4": "2y6sRTHT3WsAgdooFnEiP7rKK3KqdWVwef3R3dRA125v4J1FEHS8KLazC4wwGCwi6UiSbFGVKtpMJRGFY97YAzUi",
  "key5": "2gS6PcnVZffoKgAwNbFc6jmQ1G36EKkyTS1wfT9u3F46VcMiAULJSLaR6TFM3ghfPecEVDVRh1bcQSGsg16TEJif",
  "key6": "5ANiP4SUBicWyRoX99xwg6DgnyopPnu3WjPf8YghwJhceUopcKZExYpAN9tFLA8RCcNxr4CLPJuqSa44ddpEV5Rg",
  "key7": "4ceqXGRVCbo8rH91eqMbQNDKHdau5AzETcxzDkMmhKL4n1WSh3tAsQz4R52gy85JVq29ow3fntv8PkK3hrfMN21K",
  "key8": "8cnQcoTUMvrTPPWf8RgJ1NcDrCN4JX84UJKrBGGPDsvKiPNDAH8JnwR4TiZBkQvqhSU2PLgrS91nq875FkXeHsN",
  "key9": "5j37E5MVhLPDSdmFSYFAyW5WWXFeGZW4oenqfsEe3TLHgHUN531nN1pm7mFUrpxyHmg2oUKrSMe64HucbU1QnPtn",
  "key10": "4oHAKN48MzUB8A1W1VnwnJFTa3w82AB4JQ6ggSi3BJ6aTCD1gMWbjme5ud1oThwUHVpPhdASSZ4KSX4KqXTMTrPk",
  "key11": "TP2b7FvVPTvJ9tihFgGfP5tPNJ33iWVRhpa2sgb56dL8Wk6yFFH9PZuZnonhY2BzdWqnj819HYsUoaWhcJNJQ5X",
  "key12": "43xDeASeph93ZzQLVQDW5qgYyq3foVxDmxwUmK1h1NLt4Qyp8FpbCxwz9oYRNsTKv15q6E4VGAXZKvo72CKZFFxC",
  "key13": "3D2QP4zPNeGL2ZjLSf39Pyytsn2hTeTrnYWdvKdW424YgQzoJL3EK2UvJYknFTxpf7ELSxVjSKbwzUdcEz6bpxpp",
  "key14": "2rGhu6H3jisLcgkvKHjT4gS7DG16BGdm8B91Tx3hqVoS238TgvoyT3Avni6QoVe7mwsbtaVNZve5ppEqJRJqfyod",
  "key15": "5qcXJprHn87aQJWSAxE74fJQv9XtQoxGRPNvSGyf2ocQt6hqTg7ZgG1dqSW3CV1yrN8WcC7RvGXY8PCJ5oxLsRbv",
  "key16": "5YjvrA6x7GbRuFeT3NvLWMPL1cKHrnaKgWpjna1tytTJ33eiifE5iWYjBNcVgNcgQXKvXVvfQAvmywKNqhUx6Ydq",
  "key17": "WtmRE6vqsvqgBVQJeREaTCzodGWusWYL9Rs5PBucMCso5FhTixpTE61ETXbTWUWmUn7pdWQ9UnUjwU1geVxMCbn",
  "key18": "5S5EU2HdABJgUnBBb4EtPA43LZBJrKdRKqTDxgw39wvPpoMj3EzhDnj4npjmzZ8PD9WwrJs75G2k8cjiWgupqLdo",
  "key19": "24uHfgrYJEXC1DKzfJiCdVpADXS4HebxPbJVWC7DK8iKfFqkqxC6Xx2KiJA13exrDfXpkdpPi85D53y1ZYTdWKyb",
  "key20": "2xBpCkjoFS8ycj6xJ9X8iZpCU1vbqf3gwLCdKwXMBgKkqQ1sRYz8vtsVtCrzbopbHxdgZtcYju2Z4sUTBGgSsiyF",
  "key21": "4JATLpgAvQHhDoBKcL5yu9HG1WfhXQ7iqSetUtN22GSkSSU5NU7VbRQQKWJajFpuVJA3mUhAkuA99Rz7H4capUwq",
  "key22": "5NBKLJf2H2tnWbdQJCL614i6VomjJDdYkwnxjbN3MEs29MEbd6ifa8VHrbBR11cMwXHydboYqktwqmA2dzFvKriM",
  "key23": "5DHoz3taYCZHtmkbnUYeeeeBFMRu53HVoqmk78ZzpLyx4YZBensDTaK8M4R5SUVHPePzjPwXxV5a4Zd17kGxhLSU",
  "key24": "62PF464GsQ1S2whGZmw7piGxbrrSHTp37cxeEkYXrANgMLN4wFNcQnRGDDs2LQRhbHsMq9PN6XG7cJb4pMq7YoKC",
  "key25": "syfoGi37efqFp2vv36cGcaviiHCv7G139jY3VCS3rfUkqUHBBwXZUvXNhY8HFQTfVrhmDoMT7AyijWZNfEoy1nx",
  "key26": "YzgKRdDttPRT52CYZZp2H2AwDcSFRkg6uYSLUV1DAEEjWFzDv4ZTU2vR3eqNMf9rZKvgQpyAXNydqEKxtf9b79v",
  "key27": "46o8MyiCXaSmsbmvamZmgG8NncWnaoqkKUJXjedo9yx39XHmXq9op51SjTgaLp2UW5PB1Uf7KCbEMCdNGQbVyeQ2",
  "key28": "2dEkGUKS4HSoFQiChC76XS1BjexZdpSTUywEu8QhTzNXqaTRctzWSLdACAg1xdiWnbZ4wBZqVdxDUmA4DzT1Jnen",
  "key29": "5QbKBNSdwvc5rQGEbeRSutcpFnSXMWnFQdyybemh44xguLqqNVuBMCeLhG1sJc3nu6rvTJUFw5XQcxxEvG6VguGo",
  "key30": "Hi4XTR6eZTV6xqrSPg1ooM6TewKBCDLhsfmGLFMgsLj5SQd6ZMZh6W1LZjDFED5ZjPbBS7etCYFUQfshGN4yUGa",
  "key31": "VuG7VMtUyyD49mD74pCL2t4XTAYEyZnZQQQacZtkxLcuPZw3Kfd4QKA2WUKa2eQ54HvUHVdXJm6WsX7j3k9zQ2C",
  "key32": "2Gb7XHPZziA6ZqA5mRRQGfHu8EAaKYJtySSnEKBK61TSvRVWHztSeZbwxaQ5yhcwd7SgRw9N6jNNkHPMwL47Hs9B",
  "key33": "2HPL5MFDMoP4Y44QHmu7s3UbQJZHnztob2N6FgvvoExcDLhkBUWsPnctEDNGkZ4yjV4KycBeso8AGuZgM3cFGR9P",
  "key34": "3GVxeeo6U1rm6LbXQG3G3SpCY8DSYYA7SNmKS6HQb6L47BU2QZtC3VNhX5xuPESGDjpmhKaf8sTM5BY1FmpUNvr1",
  "key35": "sRArTsiVAVrCrEpVcwendJs8CKZMgsqvDKuTPE9siwDq8aKcDmCq8LMGFeMyEUMGSvmRhhHG282msfHYjvvBKwj",
  "key36": "551p4DrJ7vX1ukB33imc2h36oFpnfHmtqMa9voAg3AyxGzgCfwkvFsGoj8W1UNk3kV7unNkT7TzFSdwMPdp9P4ER",
  "key37": "nUhP4V7nYap2p9dtwCmdSxokc5H5nGiMs74xsy6o66SVBmqcb95ZXrk7yNBsuVmjAHeHMCs1FcZbjiQxLCPGpa8",
  "key38": "47TsnN2tVCWjPypBg1nbpCyNGTV6zAibDXwPY7VykG4ewxUdW7cBNs5cXhTso9j1mPnswprGvWWJks2kX2f4wQMv",
  "key39": "rc1iJcspuzfxSL2ChcW1Hdx9LFTuZ6iU1y1Cno48D4nBBEsRQvfmDKMu5UTKCsrQVhjj9xTtSaYAC9TxeZ9WNT5"
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
