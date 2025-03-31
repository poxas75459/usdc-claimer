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
    "38LSqttNdG6u2WiDULU3ZACBBy66dSJYTZ28CFQreWWSiGdcZE3eqCyVBJBagZKprsbzdYYNc8JvkvoFcDNc77gD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u3g9VVYtbA6CfFYbsUgCr9zDDWMcbDXdDYNf2uFd2qtLGcGc3SKWU8JQ4pKrkrAJQxU3rqJYJYjv32VyA8aJeDA",
  "key1": "5pPemrDVAXbkhbvBCQjc52WaPVNBg8y4cdLGDkZWMh9ok9phgX1JcMoPq2iYHhtjjtPGKNw1shFJZUc5NAvSB9Zs",
  "key2": "54CZXtKFYADx2wWynit6PC8qPCbTgkbvB17Cja52dXwNVhjcyY8qbiBcqGwHPLQt5RrW9ML2dii2C2CAsPCzfkgn",
  "key3": "49Mz1Z8ZFcYvL7yHFdePdsXggRRbZYuduQdMh7eG5c5oKsXzXqHym4ytsEr11ffsiT4PXG4h55RzdCWtAW6ugGiS",
  "key4": "kJZGrnqYNoy4q5F4Swy5jhfX18yxP5N5FQDUoafk3wHjPzXhc3S2GUT4DCterCFKhurepPkz5Cn9AUDLM6Ki3Yr",
  "key5": "4P4XtSWVoE7Dq5vNVigyRBV6aXnBRxBrjc5Dw2iaRKFjys7SzEwH8QTD1nUfs3uZkfQo9jtzse7Kcjqqw48v2H9u",
  "key6": "5LD7z4FhSPZ4rBZZpxZsPt2QPxCs5zP1V17YBtRmB7YoPxp59uaePEkNtMy2Nj7mn4fUhEZutsp5fhgnwjnEN9py",
  "key7": "2d4tACuRhE5fB746prfpZ9jqbnXZ8K8oD9TXBFzmCBQXQ79K4xW1rVKgnz3nucqUCdKeeT9uTLPjgQr7kGJkfGwt",
  "key8": "5buk5rCK1D3WEXaA9d15AM4HnpLkwxignBtesGMK6zwhDxJULPzhKBNs97wYZJkt6FS2BJXLLSDSMZMdFZTB5ygw",
  "key9": "2FJmVT32tL1BDjJLWuqqfQ3sZyoXdAunBR9V2xnmSRvGh9eT4FqUQ7Pn8ZgF9eoS34zzeY3T6HUxwBPSPvMMTvsx",
  "key10": "33YTuxQs5ZCacrCv8zY2y86GayiM84VjNeFyx3wzQhNSGw5zLSP7oXh9UKBqt9Sr9LBPH7XerjkRr92YWGqAf4eg",
  "key11": "2CmZLz9UkAoADwML3x779rTGCKtVJnec4vYigxc71wdskaojqoyFEdjTjMMkLzD4NUT3zk2cXfWaxJRkiuE2SRcN",
  "key12": "5y2GwnacM7S54MmuQboS5gfUozka52Cg8dsgWGXrQKwEdmrp94EzNdajjt5kxa8Pjj1q6wM1SemdAuvhLc75deT1",
  "key13": "4AG8HdmiMo3bhsXGRWWS98EJ8kEycuobUsfrDRjuJJ5SaJLMvF9yYhrzkb8geQaHVjJdzPwC8RsKekLarqgt2TiL",
  "key14": "4kwavCTA9uLfzR3kxdZLvJt5WoqtJZFYH56wSm8sxB1NqQoWuBzT8qxBWHeiDSWYfHat7RxJhpJQvWAPBeNxXVhS",
  "key15": "BDdVkWEXrpfzYc3pNJ2C3mznNMuHshB6hczM3yxeN9NEqXo3VxacdQ1PixEa6vSnHhBdkJ6RoiN2YV5LD7JFdDi",
  "key16": "22DHnXJwkDeUJsZ3U1Hvt5vHSQeWL87rjjjTx7YGpCKLqgFJr9v1iq1twMRiNMDbj8RT3ww9nCcszHovYxZpyQLZ",
  "key17": "23UEhRgwqR253N69Cij1im6DdaPJBvyPa483e5fbkhHD8QcJtAN9sJs112qSwBjojtffLt5sJU62UVeZVCpTJ9Mh",
  "key18": "4Yo1wsV5HDdPZ8RPMCay2ctHz4Xh8MUaM2EehCfXGxFyKUUqzMrVnrWt3ZmPK1S1z4n95goZhgrqZh1Vgi397dup",
  "key19": "3BLBvndx8RTeCTN3YzhVToM3Pjxs34R2xwB2VApz2fUxwVcXm7tF2AmaDDDvVjg5NCp22LySfhoBXVRMJU5DMG1g",
  "key20": "282t3akBF4KvTpit5Q1f1bNwWQY8Htg7YpYuAzLBvVaPvzEhPbHCqQuUC9zRpL7aY6sNhAf1NaN31RVYjh4xKwXT",
  "key21": "3BiKKmUzAozq7JPDCf1ycuDSEY1B2JcX3YxFDujTjG7Yu5zd18e9TwVepQyWyA8CNkBdYAnyVDUXFjB2JADxpJrd",
  "key22": "bffnLdjUSPESTc3CYkSxKfgUizGVEBEHptpQ6sQNmDigLckM5gFbWCgjecJHaQSW4xeieHjHEqet62ehjDQ6MCR",
  "key23": "2PFuKSUgWFaTbKAdGoTTGNK9fzfeKcb5XRMCov3jSnu7e1n5xoaov5YyEuPNjotZ1vRoufDKTD9XcxQdk5XBZTWh",
  "key24": "5ckDgDKoixdUUAc2UsNMfge19b46TjvfRiRTnyTPpG1riPL16CR3g4tnaRDkUPy6Xau32EMpoo6ks2YVmUSRJ3xz",
  "key25": "2Vna7SACkSeDgLzzepVAVWSZdziZzBZ1MBNounq2PAzzxqdLjMBSjJhZmgxbBkGMA88qTurGdvVidCS6zphDPcBs",
  "key26": "21mX7HbACiyRAncVMHr3zhGvsCXA3E2Eyp7PqBkAh42UpvZuwbpSABVpuW4mCN4TZaDZSoVyRstCFaMoq1egnb5B",
  "key27": "7z2jSMz6vMxTcDnCMw6CWZCZZrBDueLQrvSoKBRtUZr6aFBPT9KxcW9TjBpkBCKZXMfTNHT1XJjEvCvw3z5M6A6",
  "key28": "4wmAC7fu1iRmkTqyKCUrFqrqnZghe6LEZYAaUP18odFPWTVtRqasYzKuiJGgxd1CjEkSKvzjaSANV3G568V2E2dT",
  "key29": "2rtLwT7wbKHNaD5B1W6F6fiAdBoFGqV16zgLe2densqYxX9MNtLdCyqF5PdDocnH5YwhvjmAdPqJkcWdnwYcWyR7",
  "key30": "3w4oZR6VWnCAPngR7gVjc7i7379mznd2BkvRzAyrmPD4vF9BHeS3w73V29HfQTQqthbsFMXZvTbJVCY9jK7fNbBT",
  "key31": "67X91U8wmr1g7YPzUVETzUEfqzNNyJ5Y7SaAfSUrrjFGWeF9W8xwtVtZjhjnPwwHbTBp225e8tfnJ2vEEpVXfWjn",
  "key32": "3VbwChDM5pQg7FZHZKcaUiWwqAWuRM2KVcysWHe25DB1KYE9tdwehfrZjs1yFPXCCDc3xUxHnkFFHz4QTygQKNvr",
  "key33": "4Lwf1HkeuH1eTL7gGP1QCdje9oRL9gwMFEemDX95RtU3Mg7Qd8XqTwwx3GStYbEUjQqptEAhbEBKPxtvbUQqg1d",
  "key34": "2tFVFgHR9LD7MLbnQVE5fNc53ebyXtKa1uAkXKQvdj5ZjhKt4o21ZsKXcjZzCPNZxwo1tkD3V7xhtwqm2HrjE4Nd",
  "key35": "3cokfX5PQP75JVrNq3JUMuN5U71ffX7ABKMt8MqswiHywQsNCrtVFJapCYyLNEkoc9vYuToS1Wmb9kmKaboheo8T",
  "key36": "QKTsSVg13YZuFkqm2cehS9mEB2B1iRuUQREhFjt4F3FUY2ApV53ytbykgo2cZ3xCWMmgiW5Jtra9KPzc6VE5GZz",
  "key37": "56qdPW6ifWZGir9S85mTs7nDyvZuDaMjn4EVVUFgNzdSPcrnee1yTcLcJUrUCLEkv3nBm5Bn6wq7uX24KJP4kjo9"
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
