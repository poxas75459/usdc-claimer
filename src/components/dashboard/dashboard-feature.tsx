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
    "5rd2WdUBpVg36XpTSYBU7hYbK8EJ9WaVeMpewnTM8ntAFeKqXAg4me68S6nT7eS7f7sKbfR1N87oghxqKcT7vxAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eGYbaC3whecr2CWEmMXqYJ7hSY9qX4rd6oLNrAnuPbrHYcEUi5aZi8LSKLawcRdSu9TkLqAycnuDY2EsobzzwCy",
  "key1": "GDfgcPEvs1hkktwm2HHKDh7dYMGWzrYG1n1m1244oXimu5mYPqPiHqs2Lnn6EqSF1uQTKVheg7ciB6JYAJLNxar",
  "key2": "5WQceMvB8CjQzW72DnLXPbZcse8VJ3Nduk2mgSDQ4UcnrqradfZvE2crW7WZvDhVNinGUZJNPP6DHw1d4N6inY2j",
  "key3": "3CyJuQ6qREYt43V2whiQaDTM4bSQ9RHNwCNhFmBSe8L49gic6HcTsro86hoSHJdaT5BUcdhF6ygnfoGzdeFYoyah",
  "key4": "2r4aJwNvH2PTRWXQBeCp3dPRqMK4P2ZhxvqzcVDoudYy1ZozWzZ4bD5hi8HdzzZZLVuN2WppYCas6rVYefuSaJ9p",
  "key5": "4rfk9HKacuDvPQ1FhjrGjosoibbo2p834gDjf5JMs94u8TLrMYfSESbaEqm9Rao38pdptFvv6Qd1rCktkgbynKh9",
  "key6": "2zoLZHASBE9wswLdfcZKGokt6QeaRDevYGpgkgSrDbL7WvezEP92HKHYioBULGMGXoghBidS4cB6n41BxxjZhn6z",
  "key7": "3ZhFFmdTKGhk8kbPMTX4ep7iDcj17UaZDf6GrJf4cLKfcbn9mmqzQMqDEDcpgNxfyDeKpJDxTXqR8gYxAHztAVrN",
  "key8": "TJFnKP4cHsxpHBBCDqbmuhuzPyP77fAhqr6hGQQa4zaEzU2ppfcHo3pqEYTNucKn5sFwSbQQKgfRpXUeVKotsy1",
  "key9": "5RzBJ8bBCis6U5Z2AwrvkEZPrSpcaMEheLtEET61hgKryc5ULg9kYvGzouDfa2UzJhq3W73ni2bD8MHpMHSfVhYd",
  "key10": "3QEXbGzuTUPxq1Ac1wsMqV6bV1y4pW5sb9bTZPsQBktHM2bdrApyEVNJgczowJsRyJcqyPPDAU6Usjvd5XYmbdGX",
  "key11": "64FAtxosraadqRPosGffA8H5GxaKuSVoUBfBrJfAGDLLwnkcZeH719UAZmxWxu5cvEMuQDEc5e4Lw7LQ8D3WHTmJ",
  "key12": "2PwayKsT6RpX2qJyAUr6XCaWTtyhMbSCpYHGpyaaqDbATkMwDHz89MdU639Vw8pqu4fKaXmjPUfNCJEZudnnvxsn",
  "key13": "2F6xiWcTB7QMcsZEnG1afgLKbrPUmm3bACDAjzGVK1AjeNLwprC8nf9wV37quMEyqJ3Dqu3aWgZqsNR9TNKamdVa",
  "key14": "61SwLVypnt1CwY6VYvFjhQQ6MsrEYqo5edfhjb5VEBBYaHaqDfo3YRdx7GuHaLR5BmG1i2YFry9abSJhQwNqkNvg",
  "key15": "3s24cjZk4xyz3qTgKUBeEDXz9JR1FmxeF4SmckcAVKwkfE3TXUXTei4bfYeM2ycaB6T7ySVRGKa92SPYusB1q8zG",
  "key16": "wi5yhVP8QXHbUehdsCUzGQYrRA67SPYrXHt7bh7cv8MYPLcupFSGTwp6XSTGnZEmKRsxPRxjRw9UcbvMMCYwQb8",
  "key17": "2imrcJwph7oAPuXmMuwRE5UyVq2rPXAZUXSTVSZKNYooDGDAXYGATtV7YNvaQWyRoWSZxspsCv4zdNr7ntjS6p96",
  "key18": "26vq2NPKAXdz6qNxsi5biHpBPE3DAT9tDkJ5wHV5KTUCZPVV6YJSL6XeENGPjVW4EfN62GUMbXcYAdBe8zjiPTyJ",
  "key19": "sjtGp5oq1VugTxhYDmKWvsNB6wR7FcC1S2oAkTt5YfEdixyG2DUzNACuTkSbxZiTQAaBQFgURQtQj1YUXJLRJua",
  "key20": "4JKhzica5yZEyQDr2wWiX6d8GNyNijV51ZZ3dBTHf2gxrNExRtDaBh1N2avNsKxVKNs3jhAjzZSd8HEC2VuTBEdc",
  "key21": "5qNqTKUh6wcXzPJoxGh3iJ7M2qAh38h9U36dcMWixCDDArMiAXZyGyVZvJBk9RPXHFRGH8EJw3NnDjVXEatU25q2",
  "key22": "2MGSAJfe9G81vxMRxZQu4TksfM5qPT8tDVmKgUeZNGNmKGyRuGHETZmqFMPG3CoXaF7bdcJ99qA2WqzrG2SDtS6d",
  "key23": "4vp1RoWSaCo5RaBGG9HTamYiKEngcEVduzPfxg6M2vMui5va7U9i6h7Y3trAzpeszmrJs3PPUzMG3tNuTE1FZa4c",
  "key24": "5b4CbJeTRrE86tWmpvAtK1FYzq2QBBTCdJh7VKM4r6P8fLSLXkfNdUCqjAS9qtsvCgvXn4j6sT2YqHUoZdsN1jXn",
  "key25": "57yFf9EQtrp5j7mBhVG9jauXGwNMMF6iCAGS3DsijNMjTppWN9QSuyYwKDdW958YszGtW8WcRdiT3x8iULZ4rCMA",
  "key26": "2uqGmjsVCrTvhHKd6RSy9KWpTDzMPx6M4SvVZXshR42QfPSsqNVGkkdEkJkF52AoXszm69pe9u6bRqDe7djHGRoc"
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
