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
    "53uhJTEzg2nj8LJMYw6H2rpkWhZaPTcF3vDCMNd3WfDyt3WGcLUE8L3oNn2d4iA1J5uRWthzr91BZNBtx3Vxn38p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sGZXEmMvf4QDv6wSpzxUeajxceM4G8vH2i5Tao3wVan8fzRmgpMu47nEVzMt2uGvYKDLVUC2PAjmqDjkxTRbS2Y",
  "key1": "3ShbQhvKPVD56quhpyuvyjfmr3Xww6w7TkkbGonDdvWjH9eRoAX6LA7jrePwLJhTVdhaBWH79qn7PGg9yfM2rwZN",
  "key2": "5D1gfse8AnAPtdkx1ZX4rcbVxqtjVJFRBLkMcDpzVLdHUXnXam62zJC1RRWcVcCAZV9PcqbfDU4ZDjr4A6sqWv1d",
  "key3": "bGAC4KsdxJLuieVCby6aGPGxCnc74oMF2Cs2cPQ7ndrw945PDkuGh3WoozWDapgXXKiuwCGkGHFCJJk8b2tjsjY",
  "key4": "2sBBmeWpXA2krYcV8LZrFj3riZwCi1LdVJywex4h2j76ZtRfxSXT4kez8p9t9dZsz3cybhrGZwk5Fp97f3vhnXdg",
  "key5": "5G69fwN5AjjzvcuLDUU2rDhx36FjADrA7qK3JRit9SnkmhNACt9ayyi85eXs2mw6hZ2MEqbwziotQeox4gs3QkQi",
  "key6": "kwv8QPfnYwENqTGVWugugzKq6VpYyviQVNtwvMQhkcKrRh4NQoKuS9PvwowFABwqHCLvJpc2phP6MkMPDvPP4AB",
  "key7": "2NmuJxZpVw9wxCmUgyT3PDejQM5fUc6RH5FaSDCcMCRiAKgDG97tXKAbZXgjjUiyny3hyFWmkebfoQGy8cbHKcxC",
  "key8": "4Cws6hj6o3io2mbiRJe4HaiHHhyc8arPi9nuJATwt8srDQLeTjyxAmhzLkvNmkFxa1dYHKQDV8oWeD9kHKjNWGkp",
  "key9": "2MBFKwJhwShovGz6nRMMvyCznoMYarTjymNwMouS9zr1Ceckfrwo2ecn8nMFroV2zcgL7Pkjac4Yc9sGiNyuwtzc",
  "key10": "2iBBmYcX9tsiaPD5PkFLLyhB15Wphg84zma21qPLg3W9L5wNbE52LhrzcxmTAmwboJKwVki8889pGV8VzH9JvPef",
  "key11": "56LW41Hd5YXBnBobFb7BoQSx1M9HM1321ZPP9oJsxMLeH6U2JGRVYY47yz3qL7H7R15CirQASkTxVh3xAjifSoZG",
  "key12": "42CsCqkiaQSJePohk1TXW7o7RjjgvngAh6Xv2R4N4DWSCxpnEkJvsFWaA9LiDdRQWQMLdBJLBA9hWHSQka4MbCio",
  "key13": "4rhLBcKjEZwnd6kEcLGbjDcUfbX7P97QSkgQkHEdUoEigkDgvPE31mQm8dF7QAKMQVZfcPXa8KqsSwwHrh2FVoWA",
  "key14": "hrY8EXrY6M49Axg3XUdi4atgfQrbykY3yjfwsMwNEGGF7a1UBEXrsSSdTpwqjAhWX9hvf5UiYgqZuXwm9eMhBnq",
  "key15": "2yhTkUzbQbGjAcNRScRjxipfw4jjpNGppH5aStEGA64SFXiXWwguk1gnoYs9DqJS66h7LDcZ81qgZQnj6WnTHcSG",
  "key16": "tg4bctkuSkwRqFXgCzHfocisW4E4dzo19kXFMcATjNr2YkyGAob4JM75DxPu8Pe42hybWW1vSyJUuQwSSxbDrPn",
  "key17": "5YtJ4AqeJFCR75vizqSLsb5u6RZCoqxXaLnx62E7Hr8z5fn2yGdy8HGM4GwVAKyzesw8otT2jULyZHuY66Ku291A",
  "key18": "3SCkzfXnYN72MaxZsfazKVkyZDnNfdRF3SsedTtSt58rGHrh2HP7Si8kNr8H4ndYT49cFwQwNU86DASEBxrrnxgd",
  "key19": "5XxopGb2BUQuvZMKMXmwcDWrLEet18bKWeqdFTyiMDLX9tj5cKT6Jd7zAUG8mmXa8hM2cMo2kDrvA2HCu8SJY8xc",
  "key20": "65sWUQTR258LQw5CrpnpTmcn25uAZgVyryECjNZhwGUeVeff79ettiguKTFHFziPgfxBZMHAVhz6SURpm3VkytsQ",
  "key21": "2Sgn7yfHSxyXzAYB9xULL3tLv8qn5XuSSfEec1hafGCQ5fujYTygahbXrKDsyXig4yQoHeAGYUjq3pz4YNgJyM7m",
  "key22": "3x213FQWLeXFxbBo6E9A38YmLtGdoxURGHKYuVhYdWHtWk3dxk38SXxHQsfuoe53UxyWFuBdiMLKCh1LJED455Bt",
  "key23": "5qNPKrwupuYjMUz1rp1rBjYLU5zYXw3B1Q15dGAnfaPqxbSdo9RmdXvTU72zYPgioWruwCD4yt3k9d7yLg3Nvisg",
  "key24": "xcEJqyCkWWNrC9xZ8co1TidRzu8NvVKqYsS3cUggbWvxuqaG2R1eYqmSh2jp1zS5jCjAXrE12dJ1VubTFyAgueF",
  "key25": "LitBt1HwMfmk8pT1KvWWzChq5hSmbPK3rEyx7miGnFoAHqzoof6kHNSTfAKyhEgFAzLmTNuXGas6PKQjg9Y5HZY",
  "key26": "58ojfKoosZrNnUx8WHxs3jvq8v1azjRhy89ibqvGR4wg5d4UofgSRuyaRTqrjCfDsfUVRGjhYsgZ69XxETKdW1EW",
  "key27": "5fC3KhroPJHao9dxoFbErMF8Yh5i8EZGQ5gRSNwG9Q98F54nzAY5X6cLB43j2wWL3sb4p1s5ka5QWReSChkRSwMm",
  "key28": "2PJcxGZcsb39zAnK1RXPQXrmjLgVbvaXSW6eXqJ6okAushA1RZmhrbRgi2darms68EF3iJHQCLrnG6rRubUm3USS",
  "key29": "4ykuFnSyspQCviDTm5aA9KGPf3LNYwqdX91YMrvquTLWqFEXywdDqWNsaQoMAFcrFaKECiqJ7PkAdHpygh33obnu",
  "key30": "4dZbu3ZGSZxjq2F8P83h5usL8k8CvpwZhEhgXpd65gjedXGrcrH9V9rR1yK7twFseptGHaHW8mGx9PPjLuwEhJcK"
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
