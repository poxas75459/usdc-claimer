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
    "yoGfx7G3oo9Q1CEeNq5eAxtd33YuTH2qcsYKJiBf6zc5WmL4EpQTzoMd3E2LVadLpUXpdFHTzvHXsBQacfMeiV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hnCHYPbNsByC2m1kLZKoLc43BSsMXMd121kw1ZHUfRwiYAaPTDBz4E9JHHMnfw5yrwvgxGV1GGetbmUbAChvuWa",
  "key1": "4eH7EMwESEcvrp4L1QxGE71RnoyPBMah7CgUV7tttAGkA4jGsAvuwBZ6qnQr7rqSe3R1dSSPsGcMuM39hbWCpZo",
  "key2": "3ETNFgv9QvB5YZfqV3ZQG1JKmTHYRXMy3eUXtTYgAgWvUWumYDMgd584TZXeQQWgriS3TY6v48Msu1ScGN1s81vc",
  "key3": "4mxE9uZcxh9W8dwfVmB7z7jCsCD8BjwZrtkgiLCshDMwSJNVELaUD1h1DzzRt7mQVJ4tgosnxbQj6KKy6kGpLoxo",
  "key4": "EJqjQqYvDfEpdHVHJsSNLc2CFSrwDiebfvnmrva2gcPpbbN6JPWj4P1JsVJcMZ5usX2nRTCK9ZMsmpiMZbuGpG4",
  "key5": "4GNMUYgapXY3kMzyx87gwwLx6F62iXNuN9bjWzPXip83nVpriYtvXgk6sHUV6tnru7vrsWX72zdNvfrJK5pPjiAQ",
  "key6": "3MkRpsKCCT4KwLm19iAN4SsCuQu3n3oUFtsbTieWAi9vdwVBkic3e3eXsTMV5ZDSAQKZ9Y5jwARCcfoCg4NTckND",
  "key7": "4YmwQ9PV1HBCr9BCoaF988YZyn7S8twVk656ZCmwL26DcuiNTwJuLosMJrzt68X7UZ5xvej5TFQqvQLpF329YGYk",
  "key8": "5mocdmjKUm5S6LdEjgH5FmxhWJfyyVxwvjitp4j9dZYfKJErbHHbtNS6tvNaPoN1dysPdeL5ueiwjsWGA9nZ5E2Z",
  "key9": "s2TPGDFnzwhkXuWxZMRijVhKSpJ7Sa6BGAAq5RPf5gGSgqhtdwirMfnnkmJLYJH9XrFYs8ntyedPatpynQmjKB8",
  "key10": "mSVCu24AgbGubs4cA8oGUdSZSwHZZKR9DW7T8EPHuVeUbP6v8Fv7hzHnSKzZ4cuxAVsDjvwZmXSpY8BUuHsiwPH",
  "key11": "3d2Qe2JvwWGRsu8urY9qho21QFLx88ZBcpDxYYjR4A2Z5Jd6XRP9UEStNh9UTRmFhqFjytsDCNDFnwmj1hcBX7jJ",
  "key12": "464z4Di9ZSh6BcPehvvXiaoUe9seQXw3tLVUa18pSohG2JFKRoQcu2QeavHUNnS1b6oPUna5K1wdUhgdL8qc11Z3",
  "key13": "ceiYfvgRyRzrMoaYJ1doVUkazzcTS8wY6RFvEKsLeu6buPiesMgiMWzNbrxdCwPoowd6qnJV3o6fnCxQCAyVtfA",
  "key14": "xjUN4DqsMxkBPaE9aafKYMQRYME87N9gwceSa77DShLtxvaCEqgNMQzJzMxrQt4zoXinv1JmpthXV6bv7JiTcWc",
  "key15": "4N2jCUJTrHW4Cg1VQ1jf9W5Zzgg6sxwkw6pUhBeCEn7GM4mYNGEFimjWjhAxcEPhKD8oKsNQUkuYj9Df61CkefAP",
  "key16": "5gFk89NoVDnsEZApZNZKaQ9u9RLqLxcHruExrUANRDXXsw3ksHWR2JZjDbkK9FvD7VNQeJBp1uaXGRKdpKvUr6me",
  "key17": "2ZBMDWGfTWzHzDGhASTAd38rmx5piDtYyBvBB8iQ8GkogdyNK8UgjRxLbagxE8yEk9QqAYV3e9zD6swo4o7Wm1Kb",
  "key18": "2aeDQJzdNZP4H2Mac45W28XdkM9xuABntMTzxZjXHLPCHoraNvAnWKZBWACXpb9kMbbjQkitWnpTE8DVMByCbcAv",
  "key19": "622ezk8PSAi2z5nbZe9B1XPKuq7itRqiXdyevQvjbexe8JTzo2zvszYYbDLM3RNe6jJTcBjk8S89nbz22TvcGw6B",
  "key20": "2YvZzvdgs59iUVroPujTkM4ZVsMNmwcWG24EJwe4NmTCPafsZ97th9gVpw6SDot5R1HU4LDniHe2gSvCsMkoiFq6",
  "key21": "hcY5Z2xx5Aurgq4NX1MEL3tRuaQUe64uMjk3KpczZbsdmrm86BkhhFX279dpCPhi89ew8KgShh2tpD1VXutbT1g",
  "key22": "5sHDYJUUfXnSAwXjFXxQVj2uPzid8CCBhVYbo1YTv1T9VL3i7WN6pb451dvXEbf46yevh2RJbZ3VsLU5kpohgAc4",
  "key23": "3nmSKjwagrXkcbhaTVddoVdzh4xKAb7bYet9XnyDnaSb4aEUmKSPujv2bBXmNhSRehAtVZFJXK8B6njmmMswaYZE",
  "key24": "52P47pj3ZRL9QZf571JvDZ6hDpDyCSBVMYWpNbk3vdAUZukZQrUHEGb13L3gNs9DTwJRD6tSkagZmBqprQQkYD9G",
  "key25": "AoAkUfMEr4AUQXFjsfhpYpoev2Nq5ADdVkqP2KCEddStyPnuSYEiniRue6xxRUKJDkcRacSJZuLq83jQKA2cieK"
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
