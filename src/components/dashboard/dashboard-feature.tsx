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
    "25azAZ2cNcdDKmj2W4ZmYnKfjQoUAaK6yjKWcWyAkahU2dLhauNoeUjkLENTxWq7LJdXTNLJG8ukx5HSRyZyXncU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LX6TVuxncDAqPMiXJSx3hmZXjaMpZxm6iex1pxC2i96J5pssM2xJiaZnh8Du2BNC1g11ZX8EZonB8bYnws5b4p7",
  "key1": "5JFCVk9m7FFSiZ2LNtLjM67xoJdbK8MTWQFHTaQbQrEiaHURnXyRam2GvPoKaayCXA4Sm9DVe2r3oEBwWRdxWV7H",
  "key2": "4pg7tRVEc5D4JoByHXjEez1gb6FTnQqaQmpRbtYcaMqhqzwtqUDH3qU7Vsy5bpVtTii4bHrBxpUasADgGNVL56eE",
  "key3": "4WCHHC4ew48SjdvxJPNNxCCEZTEdXDzYhGUnP1jHJgVnsneQR9Jahqw1aQovJek4jqBQCr14z7bpwkTXPXe6hPoJ",
  "key4": "ZnDva2EnTNGopkVKNzhBdic5duB7tdm5SKowMRFB1fPjVrFgtxJW5WE8voutugNzAx6tjMcghwyRyYTe8Vw78a8",
  "key5": "4pejeVTxKLGSKdFdhach2DbkM8CQJhFLXfvQd2jLt5PcsZS3JpNQ4W9qHiXDJyw5ikP2z9Re53xjW46YDD4mau3p",
  "key6": "4pwdm7cwiwjrSACr8ooqmRa7HFMFpDV5ceST1XPPw4u7w2ckf9VAfiEFkn8aDsJfJzNwxrvsrwQbeJUc58yMk4eh",
  "key7": "4vvxeFKUB3E5WXi6AERmLTRkJ2UBdcCDoP2aMeZmHaQP68BMPQL67Chw3Bv48XmA5aengE4NiMBppZiEYj1Zct4d",
  "key8": "25ST8oEoyPx4vWHJSny3BMdixTrMz4LmWym27PV88A4Kt5o2Fj74sPVBYADH5YBc8tNatgc2t7h9mSDD8Vxr98c6",
  "key9": "2JDVzMPxJwtbB1wVyEXkRB8WR17JrHM7d6hz4rqkQ81L663xEsvCjQf5jQSjSupQAs7s2T68bbb9Htfkstf8vPbh",
  "key10": "5sPSxTx5XJU6mCNPzBXaE4yMZKxpmnmq63gE2ynhdkBeV3x4gDYEF96kAuAiQuTCwfXkWCtsJPdXhQ3U247YsFxp",
  "key11": "2CGo21TH3ceUwGxm32LuUdw7z44CqkFzXDsKq2Cd8sqfAbenyYReaGBzB2uNVn3utBkGUZJg5qo1CjZxD2oALo1R",
  "key12": "wWKSpCjK2wfQpUUCQ7ohdr8Hpifj3bXRicoRmLcCWASB3ordM64aujdpaMJa5UAYxtXcxHCren4gfMQH8V5md29",
  "key13": "6rZW9PwsxSe5Cx2gPRdBD18fviWfmwDRfe9NtgKerWYJwZu5E42VvF3z37GVYbffeTEk8gD7H2EyVATvb5mGAwY",
  "key14": "2hHVRAmip1YKncHpUsEUHpBQaqdxxd2Nx3W9tUQtVXhzKT8NAKECwcsptsSvXNnZYRd73tiYiyAGRUHccJDZWY4A",
  "key15": "8PYX3mui1fwiR6hgyX73vDhvXRuE8aGYA8dCBCHPmUxauUePbc3ADt4sYiouY9TyVcNnpTW3XeN22CAqiGD4dmY",
  "key16": "2ozcQ5mf3ege1zCZJT8sqxMiK6zeyUrr4d4uJ5jBRNLwWuZcPxjvLcwhtTATNhJyTA4i6NMRqcwko8YCP8xZYBEw",
  "key17": "5Ct2RQfHyX5CUAawXL15PLZVpkrpDCAfgp51uY5XxPhTbBr9ZZJnsBiXj6dwb8ni2oUS6rFr1bdcu8sAFstuVKdJ",
  "key18": "2zXLPnAcMA453XhWUT3LDqNJuXdoAitkRXp4sezjE72X2SwjpVo2p3ePMpdrW6PEJzqu7mDXigGkB6HDSV5USBeU",
  "key19": "2NRGb5qwz8VzsDcAt1iKronyZf37Y2UgRZE151AoxZhqDTnQEdFMzY42prjRBgjVKprmXmdmvNFawi8R5b29F4Qf",
  "key20": "97pghs2CxGQ41YVePBpNLDGJXCkD1ER8pQHYgNqT24iE8pPFy6mS7FWH2K1paXj6FS7RuHxD2TNQa3s2NJc3UEm",
  "key21": "2fXZnoXXpV5V71WqbLFSti48y9fNDkrYtCEk8tJaMF3inZi738b4WFdR61f1VCgu797NU2nv2rgHdVxyyc2ix1wA",
  "key22": "37y4c8Le1McA7XnHiumo3iqBbq1GJhiK65iGifaLyu26GguD5i7U39ynuZAXz7dbWv23yq1X8jtw4gSJmk9j6Abc",
  "key23": "GjTUAMqzPrRM63vUpC8kV4rFsyggLKqpwRjzsEh578x5wC2avk5RoYoxmYkbYBStmcSGD8gnVzFrGaVidWEQkVy",
  "key24": "5nvLLFTPiUgV5FFvNao1j6HGvZ2Rq3MMfzS46qr1LbADtzChmSt131fgx7x7ssYYq7a2N27boAiovTvaEPGe27ai",
  "key25": "2hqZfT87Yv8VfU5j2T71gi6GeqZ9HWwui8dfcRc7yd88NguqTMHAD1zfbjGX3FyUkozCzLU7BQwATBJaYCyRDRWq",
  "key26": "4mgw1G8EAQ6LNBvZC1khQLqB1AzGFZDyvLtB57VH1SL48eSeagYER6GL7ajmsqeAG3DMkby6RcLe8jDKDkngPVHq",
  "key27": "2cnh6nKiLuc5SzyNjaiceCSJ7qpP3nLgToWHGE7YWXzDz4HxoxRQ8Pc7CNfb7kkaF2c22DequrvDpUZWNZi5SrJ9",
  "key28": "5p8JVt1sTZpyDzRRGh9K8RNQPauzqkA55BuiELpFPp1RWjpDu7L7k49KcZdq5JjfhYtB2KDDzfZiKgxENeTrGC6s",
  "key29": "4vBuurxUnHsWGiq9hSGp5yMKyqzsUszMmx5fSmCiHsDdJj55rwJ2cjZpm1nUZ3rXBSZNKBNs28AjuhQpzii4jRpy",
  "key30": "5pGRbGbVDoYdnSnctubjJrPHZq9QDue3rD7HHQngfP42ebM9xow4HWwptaQKMVErWTLRNhuqQJt2bquFYAR38YBZ",
  "key31": "4aRAohEGFjSbeoEavJZiNpgSLxJyFBBrwpwCmTDVcfwSWWt5VS9YVc7UqDW5pmrm2aVjgL3zKpiG2DZC9kfGExHb",
  "key32": "jHthBQRdpQcQPdXabpSPfN8VgydniMeQSwkhhcrr1e8WxuExhkbhWcLbA4PUXGsH9aKWSmZjbtc9FEXaeTHqo1g"
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
