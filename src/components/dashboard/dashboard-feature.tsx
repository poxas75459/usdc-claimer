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
    "2GkmryHXAnZaTpZYPQqTkD3kRC5UQaPj8sZZZ64EpTCrP2QuYaPv3U4uHLX54eX6ujg7q4jm274FbYrFUs2UUVJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h9KNCaDV85eTX4LH2T5yJoJAMPLaWa5byZwF2gvviVgEu811hkSu9J327RbZumVrCVwPToi8GRUv7Co7kZ3by97",
  "key1": "12LUPNFWLH448MFg2QJWHBozrYwEqDeYqsc7xxsGzHjs5nikYBSzjRLHWULMujqCS23QZXVfRe95sTeMTbapHYa",
  "key2": "2F43iLbWoBdFxy3qgWsZp1GNpPZzrEaej61ozHXFcMJgzjjiBPemZEwksDMeNJDji7QkExyKRUoaWkKv3811dGtF",
  "key3": "5u9eJgr7N6L4sEvS1b3iZHp95F6HPn2xBqfPWJ6RzjzpxUeEJEetz5fzXKLqLek1aNYg1TwGM1rJpFohgefaCzQA",
  "key4": "5u6kbFmbVrBpdsm9NDgiNex8E2GpNpiBjU6NQApNmgGiiTKVoasRbMmFne3X6HsYnWnEBo7ASj5gzBVxgFEiBcRC",
  "key5": "3o259sMF1DAyQEth9qM1ANfwc4avdZhqqAJhmKjGd1yMd3vSCLECe3LHrfM9BesdcPduL1s785CeoNKhdceytrP7",
  "key6": "4VqzqEeQXAdQs1y1omNCdLCez9KKekNDRbTT7SQMihTmoC5UAh4JEVMAMBQjGPeEgu4Njs3TV7ZmJVSxttw7LTvF",
  "key7": "5GcdLuJ5nVTokzhgu3QxaLemCS3i41oV8XYz3oERK5owdZAFJJ3hYZEeRudFMV7cm7zdRxmSmPV1L4ip2BPbKkcg",
  "key8": "2moULWre1NViyUNwDiNHTZcLPdzwXbf5wBj3SZ3DznErvRK4vkWqqD8mUBkZK7U1M4CrpaLFfZgzjfKmSPQhuph6",
  "key9": "48WXiiUW1Rx5ptjk79dKGPS2CGpK4zBaBQVrPyESCiJzF3nksfiXmrh23Tjv98NNSA24dNPg5y4EhjX3fFmiSs6S",
  "key10": "5LqW8qtYayM64fACCB5ne7tyxnDf7eu7DC8GjWmRbEgZeaW6uLDqVSAxpUE8hnswPonDSRYZ4fjEZkniVZ4UaK5U",
  "key11": "5iesiSFHwZ6NxKsCc7HrMaXJzKvSKZfXmbfRuytKBGSJgaN5fQQ3LFwwviPduUtybWoY5BzowWFoPbFKYyCVee2f",
  "key12": "2sUjxiQGDaXmJuUBSbh7VmcFMkMQdqPudLL4aed2K7gvFNTs2ND2m5TCYWAPP79WnX4Tsfw2cqTf5bbavUfPZRsJ",
  "key13": "4QjsbifrNfErTd5JUhfYAVqe1uiXA2Fi9p7oUzy3Ak6KXL96cV9ULwVnZFi1h97s6XjrHouGtEXypvNaRyNkBrJz",
  "key14": "JdnWG5dTM97T8aQKe4Pk1YR6vxYokFFVH1ksHBnkxor8MNhVStsTgph4xzaCVgexAQwis2cMwfV6qjKhNxKZ1iA",
  "key15": "3hkMaGGTyzicbW2jpaLka4F5t5viae9V9eXoKLGsrYhCrWfhyvDKbkcbTQFJqj2etBBTghYHXN4ryrFW1M54aPpK",
  "key16": "5YhkuY2k4VYjCXkq9hW2WQ6RNqpFFtd1rJQNeSkrqrmJveSH9c656xkVcwPQ2qgzTmtxL2QBqZErQ3uuPuwAegBm",
  "key17": "2PDZR8pbJhhgif2wfBr4iELXyhDv4uxcQYaUSt7TtjW9yQ728DKzzz7Jj2AF55Qt35vJpE9sE7CEyjujvcXsnCnw",
  "key18": "4kc1CHNKutoYtytUWJmrN6kKx8fTtu3xE2uPQeTjPGZCqXEFE3qe4asaGSESjYPydCtbfERviKwgubjg3qbNtaTx",
  "key19": "3NnzxamZve1JUfDBBi8ZS28J3Mp1PjTr2PedLf2G9B3oTQ91Yp1YqAEzrpV1arysdxw1MpvA8S64GZjkycpjoEH6",
  "key20": "2w3QvEWoSFbF6PU7Xy91VnR97LRiwgRp1Aue56R9b8s7QYRhSTnVambQE4UkrrTY7tL9MaHbkch5he53PhqXz4jU",
  "key21": "2x7QgNKapn83aupHDQtqng1SBFgNAj9yLZko8u4hqJBRL5UMeNBoQTX5M4vyEmeYch76ftpZTiJVH3ziorah5KG3",
  "key22": "JQQThCG6idAG6ve9CcwhvQPKUPFVZUHusamW54yJ63BQa7KP6jzYTpb5yPPGqyAmAdD35XRH8YTFPwxd56JuMST",
  "key23": "5x5pmkkoKtxFwjAfZfT1qQu91rEJEsrtnU6mnFxe6VgP9F62PeavkEFkHHpEfh1arW2bJeX55SoBMbCuEcR1SWtk",
  "key24": "588yAmMnnCNNphVqiQAGLewXDueKwTJvjA9YrCpW9gcjpxcwkFtiZZwTsZCTGeTGZx8yHAPgHoGiCHZUoGWQX56N",
  "key25": "2FtjBCvTNd516vCgM3EpYU9WbWcMS988BER2KpVzkHkidzzLWVN4BoMTxdZNGuHeCQtTNf2eprqUbruUDzXZJJUA",
  "key26": "3es1a4XRsCTpUFo6LghgC23NsvtJNwaC78J2x6Hxk8sV6cLQdDbcHNaa1iZBAZEh2cWMjNzzS5SY2LT71nrFvWHA",
  "key27": "tEGs6pmYXfmC9E1vak6gm7nFyEwSAnaRYtmVtg5QnCPJDMGG33C1HCqM61k9JZQ3TmngjnisFRqm7io9iksrQKy",
  "key28": "EV1Sd3vrXFWTieVHdRCaGAxFEAWpePmvvJV4WzpFxPXLW8hBTEYPcihkH98ccuqp2pbZLxk5otHFMSe4DQURpsU",
  "key29": "4UyMn2UW9EVuFKXaWkqPTPyG3Zhs3LR8x6XjHwePmCZnDzNK678TjEZS6wpMKGQMdzDsDqN2WcdjrRRVRUSJ4CcQ"
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
