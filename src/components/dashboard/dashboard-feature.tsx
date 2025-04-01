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
    "335bLxYpTStArhqDQ42r2FQz4AoA6m7BkmTqYjAniisxxMPVD6gBX9dVq4yBtZm4R5QytQjmskRwGm6qsEYMsnz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BqJddYYF72FNVQS8xDSsfYyWrjwLzJfFtwjnxtheLkJR2SwHYJf1CmoBaCFYcuRpMxoHjWNpgXjQZA1zMiGXjLU",
  "key1": "3YawpKfqwqvekN2Y2NeNHq4fb2vaQzP5os29WCuG5zr6we7Mo3GuiK2XhFY3cJwYVJqeeXc464FCdcc4zRXBWdPA",
  "key2": "pt5CiUtevHMfHpwGFMgePvD3aQV7Fw7ivsfYHjgdixwwrQDZZMHwzEFFhtuJtGeLeZSfu5g7VicEfsCXUD7en2A",
  "key3": "58iLXgz4Qkj1twAXTir6hQtheUWdHJhHHKdckykUPP6n2sZur1YMFzEcgJWkhRjd4zsehN2FeCnWqZEQg1yfHLvH",
  "key4": "oNnNmKRHKDWfrpphv949CB6TAC3Tr4dHUL4rbgZvUXuYKhMvZNCsmnkFE6CiZ8X1GgH3FSLzyckuyZF3z6FndeH",
  "key5": "4HNouxwGkvQmW7zhnqwA8eAu2CXvBWdqfEmLtppS47r9Ko8TL2J16BFTdFeqohSPmbYbtqrrBQ9CSWwSZVtDE6ms",
  "key6": "2mg3ZeoyJXFBzAPZ9N2uxhYBt1S7FVNr2qQmgCALgcNA4atvQXWXCcH2HSVkK8o4nLHfyR55aYaHq9q4sE9sjcA",
  "key7": "65SLXLAvZr9AAcK5cRszvNYYmMQ185vtvb7JPUmgg2KvWK4fDsc73Qt5kYxVdmyeJ1c3xRwmSndMjsA3xHsigcHT",
  "key8": "7U34e6E2eSymYD38XMjYUGMH15tnetYtxdjr6gLz9bL2eo1p7bHmUm2ziczg5DPkZpN75ACAy8bC9qNxcm7NmBD",
  "key9": "395KQncCcTNEP3iS22Nn7CJfMBjUh5fw8EM5LNaARxxqveoQ4kHNtAWvJfeEjj2MLoJZ1Esud9HDLagi5WpRRF5M",
  "key10": "FmPhJRK4cc6SKt2bgbFKtLN51LmrXK4m4DZHeTGMPPomoPVGpGQLdm4m7CHDWfs3T8kRhwpwTwpFC1eKQd87kYz",
  "key11": "62ktNxpmsXcnz35ghNbf6wKo1QYGr4zJFNAimhe762FHBDQ6qwU7ryiNKbaUHkCY7Wutre7J3qgQkCwsfx5wESa9",
  "key12": "4rvEC14qUFVN7yxDbbTS31Bxxa57ykrnomZWPKcyAQiFs2pD6kcjcnisxQqkpUJ9vmRwuqFticMoStJHehkwRGLk",
  "key13": "3wCmP752gDeXvcCunB3yddjjTghjzF1upE2WE5yhURcUUbxLf2C2PXEYEN2ye48tebmNwWdRS2g56TdKudKLfxWq",
  "key14": "mNqbmD8p1GwqwggP8z81xZGb24NqoSrZNpQHe34JNNogKGySn5fB79v3ZMY6bJAuEYkMxw4acBovmvHEnTDTLiu",
  "key15": "2YNixMErkgVDmuFZLGdBFUXNFDXqoaa7V5WM4XXAaQDx5CCTLu87QvnC6f4Ab1L86QWne7AyqX2nZShPfvvLLMXe",
  "key16": "5fdbtGVWvCTG7wHafDLXYtuxdmCtwNgzBLD38J3PJ2cTfzbUue7yu6T7swjfP7HeHVGEgNbspm8cwfUABcxz5XKf",
  "key17": "3Tw8ALFRfsYJii2j3vKXp5W8oRECQ5SBaSepyi4EdcGJcWKmrDutYwBdm74rf8ZTbLJfoPcCQTJ888w6vy5ZKzni",
  "key18": "25LdN1hTz1QiBu4eBH82DtuJ1NaJ7d61KLYAS31LaWDeURMRDJBNG2prufdeQL4D8ybk1CHKrc5s6LkqSNg2douR",
  "key19": "5VUwNjoYsmU4uhu6xwFRXA36CM5ZTxaq7uyFpaoPKG22TzS1kLu18w5Se6Spq25F5hDUVSxa1uEML1CUzA8ADfjX",
  "key20": "JhkyN8P9DfC7Gk2NjWEAvvW1eYz7rNVygfpn33mu75EgpVQahQ7cFrWeLrwgCxkv8A8ujvYos4P73YDcJeo3szj",
  "key21": "278nvCWNavPCSoQ8AB1PccYRteKCcsy5WwxqSDRmFzH4nV3XzMnjDoDpgsfCLjcTPaaAYMh9ya6Lt5H6np5Y5wrV",
  "key22": "48KGBsmWTW58dggt3XHmvBZxqTqNkqD24bNxtfz5tQNBLpcyd4BAbyTnA3ndPfWDvFzcNXp9ieivBAhaswtuX1Zz",
  "key23": "2t6Xyd3ZGYmbVESHmBEyrZCfS6ey6Xr4HFLGTE6FRe36hupAcG66FsFms7f2h5rwvNfNeJUiJE1bfF2rTuhhq4S5",
  "key24": "3t3GLP4gJJDokWeKJ3DcmF9C5SHUwBh4Z9tswpgJQgEjJ1josE5bhrNCAwRdZrk3hMeyFtn3Z1qCmoDhF4aefCgq",
  "key25": "4m678RzDHk8nV1BAaDPxfeYxr5GGoyd8qpfLjoVTR6Rin5F6bxGtmzD1HJMGYiQqHwAdUGN7s6nA6mhFcUm92SsN"
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
